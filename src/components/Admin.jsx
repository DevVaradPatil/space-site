import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import ProjectCard from "./ProjectCard";

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState([]);
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: "", // Image URL
    type: "team",
  });
  const fetchData = async () => {
    const teamSnapshot = await getDocs(collection(db, "team"));
    const activitiesSnapshot = await getDocs(collection(db, "activities"));
    setTeam(teamSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setActivities(
      activitiesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchData();
    }
  }, [isAuthorized]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    const { name, role, description, image, type } = formData;

    if (
      !name ||
      !image ||
      (type === "team" && !role) ||
      (type === "activity" && !description)
    ) {
      toast.error("All fields are required!");
      return;
    }

    const collectionRef = collection(
      db,
      type === "team" ? "team" : "activities"
    );
    await addDoc(
      collectionRef,
      type === "team" ? { name, role, image } : { name, description, image }
    );
    toast.success("Added successfully!");
    setFormData({
      name: "",
      role: "",
      description: "",
      image: "",
      type: "team",
    });
    fetchData();
  };

  const handleDelete = async (id, type) => {
    const docRef = doc(db, type, id);
    await deleteDoc(docRef);
    toast.success("Deleted successfully!");
    fetchData();
  };

  const handleLogin = () => {
    if (password === "spaceforce") {
      setIsAuthorized(true);
    } else {
      toast.error("Incorrect password!");
    }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen p-6">
      <Toaster />

      {!isAuthorized ? (
        <div className="w-full h-[90vh] justify-center items-center flex flex-col">
          <div className="max-w-lg bg-neutral-700 p-4 rounded-xl">
            <h1 className="text-2xl text-center font-bold mb-4">Admin Panel</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              className="p-2 rounded w-full mb-2 bg-neutral-800 text-white"
            />
            <button
              onClick={handleLogin}
              className="p-2 w-full bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Add New</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                className="p-2 rounded bg-neutral-800 text-white"
              />
              {formData.type === "team" && (
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  onChange={handleInputChange}
                  className="p-2 rounded bg-neutral-800 text-white"
                />
              )}
              {formData.type === "activity" && (
                <textarea
                  name="description"
                  placeholder="Description"
                  onChange={handleInputChange}
                  className="p-2 rounded bg-neutral-800 text-white"
                />
              )}
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={handleInputChange}
                className="p-2 rounded bg-neutral-800 text-white"
              />
              <select
                name="type"
                onChange={handleInputChange}
                className="p-2 rounded bg-neutral-800 text-white"
              >
                <option value="team">Team</option>
                <option value="activity">Activity</option>
              </select>
              <button
                onClick={handleAdd}
                className="p-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Team</h2>
            <div className="flex flex-wrap w-full justify-start items-center gap-10 mt-2">
              {team.map(({ id, name, role, image }) => (
                <div
                  key={id}
                  className="bg-neutral-800 hover:bg-neutral-800/80 rounded-lg p-5 w-[250px] flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
                  <p className="text-sm text-gray-400">{role}</p>
                  <button
                    onClick={() => handleDelete(id, "team")}
                    className="mt-2 p-2 bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {activities.map(({ id, name, description, image }) => (
                <div key={id} className="p-4 bg-neutral-800 rounded">
                  <ProjectCard
                    name={name}
                    description={description}
                    image={image}
                  />
                  <button
                    onClick={() => handleDelete(id, "activities")}
                    className="mt-2 p-2 w-full bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
