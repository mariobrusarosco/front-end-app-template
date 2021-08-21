const copy = require("copy-template-dir");

interface Props {
  templateFolder: string;
  destinationFolder: string;
  templateVariables?: { [key in string]: string };
  handleFileCreation: (err: Error, createdFiles: string[]) => void;
}

export const copyAndParseTemplates = ({
  templateFolder,
  destinationFolder,
  templateVariables = {},
  handleFileCreation,
}: Props) => {
  copy(
    templateFolder,
    destinationFolder,
    templateVariables,
    handleFileCreation
  );
};
