import { motion } from "motion/react";
import Skill from "../../components/common/skill";

const Skills = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0, y: 100 }}   
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 xl:px-0" 
        >
           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16 justify-center place-items-center mt-8">
            <Skill/>
           </div>
        </motion.div>
    );
};

export default Skills;

