import questions from "../questions"

const getProjectName = () => {
  return new Promise(async (resolve, _) => {
    const { projectName } = await questions.askAboutProjectName();

    if (!projectName) {
      console.log(
        `You must provide a name for your project to continue the process`
      );

      process.exit(-1);
    }
    resolve(projectName);
  });
};

export default {
  getProjectName,
};
