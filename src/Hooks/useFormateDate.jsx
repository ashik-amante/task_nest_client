
const formateDate = (dateString)=>{
    const options = { year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(dateString).toLocaleDateString('en-us', options)
}

export default formateDate