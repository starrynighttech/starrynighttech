
exports.handler = async function(event){
  const {amount}=JSON.parse(event.body)

  return{
    statusCode:200,
    body:JSON.stringify({
      url:"https://paynow.example/checkout?amount="+amount
    })
  }
}
