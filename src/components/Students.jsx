import React from 'react'

const Students = () => {
  return (
    <div
      className="w-full flex flex-col items-center px-20 py-10 bg-neutral-900 gap-10 relative overflow-hidden"
      id="team"
    >
      <h1 className="text-4xl font-orbitron font-bold text-white mb-5 text-center">
        Student Coordinators
      </h1>
      <table className="w-full max-w-6xl bg-neutral-800 text-white border border-neutral-700 rounded-lg overflow-hidden">
        <thead className="bg-neutral-700">
          <tr>
            <th className="py-3 px-4 border-b hidden md:flex border-neutral-600">S.No</th>
            <th className="py-3 px-4 border-b border-neutral-600">Name of the Student</th>
            <th className="py-3 px-4 border-b hidden md:flex border-neutral-600">Roll Number</th>
            <th className="py-3 px-4 border-b border-neutral-600">Designation</th>
          </tr>
        </thead>
        <tbody>
          {[
            { sNo: 1, name: 'M Siva Satya Murthy', roll: '23555A0349', designation: 'Project Manager' },
            { sNo: 2, name: 'Ch Navya Sri', roll: '23555A0405', designation: 'Systems Engineer' },
            { sNo: 3, name: 'D Venkata Satish', roll: '23555A0319', designation: 'Propulsion Lead' },
            { sNo: 4, name: 'Kiran Kumar D', roll: '23555A0322', designation: 'Avionics Lead' },
            { sNo: 5, name: 'D Venkata Satish', roll: '23555A0319', designation: 'Recovery Systems Lead' },
            { sNo: 6, name: 'G Srujan Hrudhay', roll: '23555A0327', designation: 'Structural Engineer' },
            { sNo: 7, name: 'K Vijay Krishna', roll: '23555A0336', designation: 'Testing and Validation Engineer' },
            { sNo: 8, name: 'K Soma Sekhar', roll: '23555A2410', designation: 'Mission Planning Specialist' },
            { sNo: 9, name: 'H Amman Naidu', roll: '23555A0331', designation: 'Ground Operations Specialist' },
            { sNo: 10, name: 'S Satish', roll: '23555A0429', designation: 'Payload Integration Specialist' },
            { sNo: 11, name: 'K H Sri Lakshmi', roll: '22551A04D8', designation: 'Payload Engineer' },
            { sNo: 12, name: 'D Bhavya Sri', roll: '23555A0408', designation: 'Media Head' },
            { sNo: 13, name: 'M.S N P Chandana T', roll: '22551A0442', designation: 'Human Resources Manager' },
            { sNo: 14, name: 'K Sai Santhoshi', roll: '22551A0433', designation: 'Outreach Coordinator' },
            { sNo: 15, name: 'B Harshitha Charanya', roll: '22551A0408', designation: 'Public Relations Officer' },
            { sNo: 16, name: 'K Sai Durga Aravind', roll: '22551A04E4', designation: 'Communications Lead' },
            { sNo: 17, name: 'K Harshavardhan Reddy', roll: '23551A0475', designation: 'Member' },
            { sNo: 18, name: 'P Chaitanya Reddy', roll: '23551A04A5', designation: 'Member' },
            { sNo: 19, name: 'S Venkata Bhavani Reddy', roll: '23551A04D7', designation: 'Member' },
            { sNo: 20, name: 'P Anil Kumar', roll: '24555A0415', designation: 'Member' },
            { sNo: 21, name: 'S V V L N Swami', roll: '24555A0417', designation: 'Member' },
            { sNo: 22, name: 'B Dali Naidu', roll: '24555A2403', designation: 'Member' },
            { sNo: 23, name: 'K Thushitha Reddy', roll: '241UCS0031', designation: 'Member' },
            { sNo: 24, name: 'O Bhanu Sasitha', roll: '241UDS0083', designation: 'Member' },
            { sNo: 25, name: 'P Sai Durga Venkatesh', roll: '241UDS0092', designation: 'Member' },
            { sNo: 26, name: 'R Yashaswini Sree Durga', roll: '241UDS0100', designation: 'Member' },
            { sNo: 27, name: 'Sayyad Musthafa Rehaan', roll: '241UDS0110', designation: 'Member' },
            { sNo: 28, name: 'D Maniratnam', roll: '242UAT0007', designation: 'Member' },
            { sNo: 29, name: 'D Soma Venkata Kowshik', roll: '242UAT0008', designation: 'Member' },
            { sNo: 30, name: 'G T Durga Vara Prasad', roll: '242UAT0010', designation: 'Member' },
            { sNo: 31, name: 'N Sai Venkata Madhavi', roll: '242UAT0016', designation: 'Member' },
            { sNo: 32, name: 'P Manohar', roll: '242UAT0017', designation: 'Member' },
            { sNo: 33, name: 'N Lakshmi Chandana', roll: '242UEC0093', designation: 'Member' },
            { sNo: 34, name: 'A S V Brahmendra Yogi', roll: '242UEE0003', designation: 'Member' },
            { sNo: 35, name: 'B Yogesh', roll: '242UME0008', designation: 'Member' },
          ].map((student, index) => (
            <tr key={index} className="hover:bg-neutral-600">
              <td className="py-3 px-4 border-b hidden md:flex border-neutral-600 text-center">{student.sNo}</td>
              <td className="py-3 px-4 border-b border-neutral-600">{student.name}</td>
              <td className="py-3 px-4 border-b hidden md:flex border-neutral-600 text-center">{student.roll}</td>
              <td className="py-3 px-4 border-b border-neutral-600">{student.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Students