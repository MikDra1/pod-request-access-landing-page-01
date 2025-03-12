import { useContext, useEffect, useState, createContext } from "react";
import useScreenSize from "../hooks/useScreenSize";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(null);
  const [isTablet, setIsTablet] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsDesktop(screenSize.width >= 1100);
      setIsTablet(screenSize.width >= 700);
    },
    [screenSize.width]
  );

  return (
    <ProjectContext.Provider
      value={{
        isDesktop,
        isTablet,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error("ProjectContext was used outside the ProjectProvider");
  return context;
}

export { ProjectProvider, useProject };
