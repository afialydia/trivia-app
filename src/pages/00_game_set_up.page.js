import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody , Button} from "reactstrap";

import SET_UP from "../components/trivia_settings";
import '../components/components.styles.css'

const Game_Start = (props) => {
	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Modal
				isOpen={modal}
				bssize="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered={false}
				backdrop={true}
				fade={true}
				autoFocus={true}
				toggle={toggle}
				className="menu-modal"
				contentClassName="menu-content"
			>
        <ModalHeader toggle={toggle}>Boy Howdy! Ready for some trivia?</ModalHeader>

				<ModalBody>
					
						<SET_UP toggle={toggle}/>
		
					
				</ModalBody>
			</Modal>
			<Button className="settings"
				onClick={() => {
					toggle();
				}}
			>
				Trivia Settings
			</Button>
		</div>
	);
};

export default Game_Start;
