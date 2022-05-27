import React from "react";
import style from "./PortfolioElement.module.css";
import image from "../../assets/lab.jpg";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function PortfolioElement(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    outline: 0,
  };

  return (
    <div className={style.container} onClick={handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <img src={image} alt="portfolio_image" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.portfolioElement.projectName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.portfolioElement.description}
          </Typography>

          <Chip
            label="Ссылка"
            component="a"
            href={props.portfolioElement.projectUrl}
            variant="outlined"
            target="_blank"
            clickable
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      </Modal>

      <img src={image} alt="portfolio_image" />
      <div className={style.content}>
        <h4>{props.portfolioElement.projectName}</h4>
        <p>
          {props.portfolioElement.description.slice(0, 200)}
          {"..."}
        </p>
        <Chip
          label="Ссылка"
          component="a"
          href={props.portfolioElement.projectUrl}
          variant="outlined"
          target="_blank"
          clickable
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
