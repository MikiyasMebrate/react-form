import React from "react";
import validator from 'validator';
import Input from "../../Shared/inputFiled";


class ClientDetail extends React.Component {
    state = {
        clientName: '',
        companyName: '',
        title: '',
        department: '',
        contact: {
            email: false,
            phone: false
        },
        address: {
            street: '',
            city: '',
            zipcode: '',
            country: ''
        },
        cv: '',
        dob: '',
        info: '',
        touched: {
            clientName: false,
            companyName: false,
            title: false,
            department: false,
            contact: false,
            address: false,
            dob: false,
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleOnBlur = (e) => {
        const { name } = e.target
        this.setState({ touched: { ...this.state.touched, [name]: true } })
        console.log(this.state.touched)
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
    }
    validate = (e) => {
        let message = {
            error: {
                errclientName: false,
                companyName: false,
            },
            success: {
                successclientName: false,
                companyName: false,
            }

        }


        if (this.state.touched.clientName && validator.isAlpha(this.state.clientName)) {
            message.error.errclientName = false
            message.success.successclientName = 'Looks good!'
        }
        else if ((this.state.touched.clientName && !validator.isAlpha(this.state.clientName)) || (this.state.touched.clientName && validator.isEmpty(this.state.clientName))) {
            message.success.successclientName = false
            message.error.errclientName = 'Please Enter Valid Name'
        }

        return message
    }


    render() {
        let { error, success } = this.validate()
        return (
            <div>
                <div className="bg-dark p-5 text-center text-light">
                    <h2>Client Detail</h2>
                    <p>Enter detail of Client</p>
                </div>
                <div className="container">
                    <div className="row mt-5  justify-content-center">
                        <div className="col-sm-8  card p-4 shadow">
                            <form onSubmit={this.handleOnSubmit}>

                                <Input errMesg={error.errclientName} succMesg={success.successclientName} handleOnBlur={this.handleOnBlur} handleOnChange={this.handleOnChange} type='text' className={'form-control'} text='Client name *' id={'clientName'} name={'clientName'} placeholder={'Abebe Kebede'} />
                                <Input handleOnBlur={this.handleOnBlur} handleOnChange={this.handleOnChange} type='text' className={'form-control'} text='Company Name *' id={'companyName'} name={'companyName'} placeholder={'MoPD'} />
                                <Input handleOnBlur={this.handleOnBlur} handleOnChange={this.handleOnChange} type='text' className={'form-control'} text='Title *' id={'title'} name={'title'} placeholder={'Software Engineer'} />

                                <button className="btn btn-primary mt-3">Submit</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientDetail