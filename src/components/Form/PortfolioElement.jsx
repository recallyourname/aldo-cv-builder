import React from "react";
import style from "./PortfolioElement.module.css";
import image from "../../assets/lab.jpg";
import Chip from "@mui/material/Chip";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function PortfolioElement() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const strtopass =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae	impedit placeat dolores quis incidunt enim obcaecati qui sapiente quianisi quisquam, accusamus aut fugit soluta, distinctio, quas voluptateullam aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae	impeLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae	impeLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae	impeLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae	impe";
	
		const modalStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			bgcolor: 'background.paper',
			border: '2px solid #000',
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
            Student Labs
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {strtopass}
          </Typography>
        </Box>
			</Modal>

      <img src={image} alt="portfolio_image" />
      <div className={style.content}>
        <h4>Student Labs</h4>
        <p>
          {strtopass.slice(0, 200)}
          {"..."}
        </p>
        <Chip
          label="Clickable Link"
          component="a"
          href="https://studentlabs.ru"
          variant="outlined"
          clickable
        />
      </div>
    </div>
  );
}
