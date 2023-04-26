
class CheckDataBooks{
    static async VerificationDataAddBooks(infoBook){
        if(!infoBook.idUsuario)
            throw new Error('id user not informed!')
    
        if(!infoBook.nameBook)
            throw new Error('Name not informed!')
            
        if(!infoBook.insbn)
            throw new Error('INSBN not informed!')

        if(!infoBook.editora)
            throw new Error('Publish Company not informed!')

        if(!infoBook.edition)
            throw new Error('Edition not informed! ')

        if(!infoBook.synopsis)
            throw new Error('Synopsis not informed!')

        if(!infoBook.publication)
            throw new Error('Publication not informed!')

        if(!infoBook.language)
            throw new Error('Language not informed!')

        if(!infoBook.available)
            throw new Error('Available not informed!')

        if(!infoBook.amountPage)
            throw new Error('Amout Page not informed!')

        if(!infoBook.price)
            throw new Error('Price not informed!')
    }
}


export default CheckDataBooks