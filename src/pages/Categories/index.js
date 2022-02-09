import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { 
  Col, 
  Container, 
  Card, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Row, 
  Modal,
  FormGroup,
  Label,
  Input,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"



const Categories = () => {

  const [alert, setAlert] = useState(false)
  const [alertConfirm, setAlertConfirm] = useState(false)
  const [modalCenter, setModalCenter] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)

  const editHandle = (text) => {
    //setAlert(true)
    setModalCenter(true);
  }

  const addHandle = (text) => {
    //setAlert(true)
    setModalCenter(true);
  }

  const deleteHandle = () => {
    setAlert(true);
  }

  const addCategoryHandler = () => {
    setAlertSuccess(true);
    console.log("Hola taylor");
  }

  const data = {
    columns: [
      {
        label: "Id",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Nombre",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Fecha",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Opciones",
        field: "option",
        sort: false,
        width: 150,
      }
    ],
    rows: [
      {
        id: "1",
        name: "Tuberculos",
        date: "2011/04/25",
      },
      {
        id: "2",
        name: "Bebidas alcoholicas",
        date: "2011/04/25",
      },
      {
        id: "3",
        name: "Gaseosas",
        date: "2011/04/25",
      }
    ].map( (row) => {
      return {
        ...row,
        option: 
        <div className="button-items">
        
          <button className="btn btn-primary btn-sm" onClick={ () => editHandle(row.id) }><i className="fas fa-edit" /></button>  
          <button className="btn btn-danger btn-sm" onClick={ () => deleteHandle(row.id) }><i className="fas fa-trash-alt" /></button>
        </div>
        ,
      }
    })
  };
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Categorias</title>
        </MetaTags>
        <Container fluid={true}>
          {/* <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Categorias</h6>
              </Col>
            </Row>
          </div> */}

          <div className="container-fluid">
            <Row className="align-items-center">
              <Col sm={6}>
                <div className="page-title-box">
                  <h4 className="font-size-18">Categorias</h4>
                </div>
              </Col>
              <Col sm={6}>
                <div className="float-end d-none d-md-block">
                  <button className="btn btn-success btn-sm" onClick={ () => addHandle() }><i className="fas fa-plus  me-2"></i> Nuevo</button>
                </div>
              </Col>
            </Row>
            {/* <Breadcrumbs title="Inicio" breadcrumbItem="Categorias" /> */}

            <Row>
                <Card>
                  {/* <Row className="align-items-center">
                    <Col sm={6}>
                    <div className="page-title-box">
                      <h4 className="font-size-18">Categorias</h4>
                    </div>
                    </Col>
                    <Col sm={6}>
                      <div className="float-end d-none d-md-block">
                        <button className="btn btn-success btn-sm"><i className="fas fa-plus  me-2"></i> Nuevo</button>
                      </div>
                    </Col>
                  </Row> */}
                  <CardBody>
                    <MDBDataTable responsive striped bordered data={data} />
                    {
                      alert ? (
                        <SweetAlert 
                          title="¿Estas seguro?" 
                          warning
                          showCancel
                          confirmBtnText="Si, eliminarlo"
                          confirmBtnBsStyle="success"
                          cancelBtnBsStyle="danger"
                          onConfirm={() => {
                            setAlert(false);
                            setAlertConfirm(true);
                          }}
                          onCancel={() => setAlert(false)}/>
                      ) : null
                    }
                    {
                      alertConfirm ? (
                        <SweetAlert
                          title="¡Buen trabajo!"
                          success
                          confirmBtnBsStyle="success"
                          confirmBtnText="Aceptar"
                          onConfirm={() => {
                            setAlertConfirm(false);
                          }}
                        >
                          Se elimino con exito
                        </SweetAlert>
                      ) : null
                    }
                  </CardBody>
                </Card>
            </Row>
          </div>
        </Container>
      </div>

      <Modal
          isOpen={modalCenter}
          toggle={() => {
            setModalCenter()
          }}
          centered={true}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0">Categorias</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
              onClick={() => {
                setModalCenter(false)
              }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AvForm className="needs-validation">
              <Row>
                <Col md="12">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationName">Nombre</Label>
                    <AvField
                      name="name"
                      type="text"
                      errorMessage="El nombre es requerido"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationName"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </AvForm>
            <div className="text-right">
              <button type="button" className="btn btn-primary" onClick={ () => addCategoryHandler() }>Guardar</button>
              {
                alertSuccess ? (
                  <SweetAlert
                    title="¡Buen trabajo!"
                    success
                    confirmBtnBsStyle="success"
                    confirmBtnText="Aceptar"
                    onConfirm={() => {
                      setAlertSuccess(false);
                      setModalCenter(false);
                    }}
                  >
                    Se guardo con exito
                  </SweetAlert>
                ) : null
              }
            </div>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-primary">Guardar</button>
          </div> */}
        </Modal>
    </React.Fragment>
  )
}

export default Categories