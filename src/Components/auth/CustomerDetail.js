import React from "react";
import validator from 'validator';
import Input from "../../Shared/inputFiled";


class ClientDetail extends React.Component {
    state = {
        clientName: '',
        companyName: '',
        email: '',
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
            email: false,
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
                errcompanyName: false,
                errEmail : false
            },
            success: {
                successclientName: false,
                successcompanyName: false,
                successEmail : false
            }

        }


        if (this.state.touched.clientName && validator.isAlpha(this.state.clientName)  && this.state.clientName.length > 2 ) {
            message.error.errclientName = false
            message.success.successclientName = 'Looks good!'
        }
        if ((this.state.touched.clientName && !validator.isAlpha(this.state.clientName)) || (this.state.touched.clientName && validator.isEmpty(this.state.clientName)) || (this.state.touched.clientName && this.state.clientName.length < 3)) {
            message.success.successclientName = false
            message.error.errclientName = 'Please Enter Valid Name'
        }
        if (this.state.touched.companyName && this.state.companyName.length > 2 ) {
            message.error.errcompanyName = false
            message.success.successcompanyName = 'Looks good!'
        }
        if ((this.state.touched.companyName && validator.isEmpty(this.state.companyName)) || (this.state.touched.companyName && this.state.companyName.length < 2)) {
            message.success.successcompanyName = false
            message.error.errcompanyName = 'Please Enter Valid Name'
        }
        if (this.state.touched.email && validator.isEmail(this.state.email) ) {
            message.error.errEmail = false
            message.success.successEmail = 'Looks good!'
        }else if(this.state.touched.email && !validator.isEmail(this.state.email)){
            message.success.successEmail = false
            message.error.errEmail = 'Please Enter Valid Email'
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
                                <Input errMesg={error.errcompanyName} succMesg={success.successcompanyName} handleOnBlur={this.handleOnBlur} handleOnChange={this.handleOnChange} type='text' className={'form-control'} text='Company Name *' id={'companyName'} name={'companyName'} placeholder={'MoPD'} />
                                <Input errMesg={error.errEmail} succMesg={success.successEmail} handleOnBlur={this.handleOnBlur} handleOnChange={this.handleOnChange} type='email' className={'form-control'} text='Emali *' id={'email'} name={'email'} placeholder={'example@email.com'} />

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