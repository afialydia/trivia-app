import React, { useState } from "react";
import GAME_SET_UP from "../components/set_up_form.component";
import { Modal, ModalHeader, ModalBody , Button} from "reactstrap";

const Game_Start = (props) => {
	const [modal, setModal] = useState(false);

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
					
						<GAME_SET_UP toggle={toggle}/>
		
					
				</ModalBody>
			</Modal>
			<Button
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
