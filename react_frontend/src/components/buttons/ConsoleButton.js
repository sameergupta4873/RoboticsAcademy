import { Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";

const ConsoleButton = (props) => {
  const { changeConsole } = React.useContext(props.context);
  return (
    <Button
            id={"console_button"}
            size={"medium"}
            variant="contained"
            color={"secondary"}
            component="span"
            sx={{ m: 1 }}
            title={"Open the console"}
            onClick={changeConsole}
            startIcon={<TerminalOutlinedIcon />}
          >
            View Console
          </Button>
  );
};
ConsoleButton.propTypes = {
  context: PropTypes.any,
};
export default ConsoleButton;
