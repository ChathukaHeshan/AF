import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import Axios from 'axios';
const { Title } = Typography;
const { TextArea } = Input;
function UploadDocumentPage(props) {

    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const fileChangeHandler = (event) => {

        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!TitleValue || !DescriptionValue || !isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            topic: TitleValue,
            description: DescriptionValue,
            proposal: selectedFile.name,
            presenters: localStorage.getItem('userid'),
            isApproved: false
        }


        const formData = new FormData();
        formData.append('file',selectedFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        Axios.post('http://localhost:8070/document', variables)
            .then(response => {
                Axios.post("http://localhost:8070/document/uploadFile",formData,config)
                    .then(() => {
                        if (response.data.success) {
                            alert('document Successfully Uploaded')
                            props.history.push('/')
                        } else {
                            alert('Failed to upload document')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });
            })

    }

    return (
        <div data-testid="uploadDocumentPage-1" style={{backgroundColor: '#E6E6FA'}}>
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Add Document </Title>
            </div>
            <Form onSubmit={onSubmit} >
                <label>Add Document Details</label>
                <Input
                    type={"file"}
                    name="file"
                    onChange={fileChangeHandler}
                />
                <br />
                <br />
                <label>Supervisor Name(Mr/Mrs)</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Leaders ID</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Form>
        </div>
        </div>
    )
}

export default UploadDocumentPage;