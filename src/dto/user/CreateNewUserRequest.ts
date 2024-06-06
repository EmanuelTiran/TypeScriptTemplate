class CreateNewUserRequest  {
    email: string
    fName: string
    isRemeber: boolean

    constructor(email ='', fName ='', isRemeber:boolean=false){
        this.email=email
        this.fName=fName
        this.isRemeber=isRemeber
    }
}