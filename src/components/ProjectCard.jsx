import React from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ name, description, image }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-800 relative group/card hover:shadow-lg hover:shadow-gray-500/[0.15] border-gray-700 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-300 text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-md"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
