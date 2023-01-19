import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { registerPlay } from '../../services/apiCalls';
import { normalizeBoard } from '../../utils/normalizeBoard';

const AddBoardModal = () => {
    const { globalContext } = useGlobalContext();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        console.log('add play');
        console.log(event);
        registerPlay({
            username: event.username,
            board: event.board,
        })
            .then(response => {
                console.log(response);
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Add
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register a game board</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="addBoardForm.ControlInput1">
                            <Form.Label>Submitting as</Form.Label>
                            <Form.Control type="text" value={globalContext.currentUser} disabled/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addBoardForm.ControlTextarea1">
                            <Form.Label>Paste your board result here</Form.Label>
                            <Form.Control as="textarea" rows={10} name='board' />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddBoardModal;