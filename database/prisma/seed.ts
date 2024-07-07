import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {

    const user = await prisma.uSER.createMany({
        data : [{
            name : "test user 1",
            email : "testmail1@gmail.com",
            password : "randompass"
        },{
            name : "test user 2",
            email : "testmail2@gmail.com",
            password : "randompass"
        },{
            name : "test user 3",
            email : "testmail3@gmail.com",
            password : "randompass"
        },{
            name : "test user 4",
            email : "testmail4@gmail.com",
            password : "randompass"
        }]
    })

    const address = await prisma.aDDRESS.createMany({
        data : [{
            addressText : "address 1 for user 1",
            userId : 1
        },{
            addressText : "address 2 for user 1",
            userId : 1
        },{
            addressText : "address 3 for user 1",
            userId : 1
        },{
            addressText : "address 1 for user 2",
            userId : 2
        },{
            addressText : "address 2 for user 2",
            userId : 2
        },{
            addressText : "address 1 for user 3",
            userId : 3
        }]
    })

    const brand = await prisma.bRANDS.createMany({
        data : [{
            name : "brand 1",
            description : "this is brand 1",
        },{
            name : "brand 2",
            description : "this is brand 1",
        },{
            name : "brand 3",
            description : "this is brand 1",
        }]
    })

    const product1 = await prisma.pRODUCT.create({
        data : {
            price : 10,
            quantity : 1,
            title : "product 1",
            description : "desc 1",
            brandName : "name 1",
            brandId : 1,
            category : {create : [{name : "cat 1"},{name : "cat 2"}]}
        }
    })

    const product2 = await prisma.pRODUCT.create({
        data : {
            price : 100,
            quantity : 10,
            title : "product 2",
            description : "desc 2",
            brandName : "name 1",
            brandId : 1,
            category : {connect : [{id : 1}],create : {name : "cat 3"}}
        }
    })

    
    const product3 = await prisma.pRODUCT.create({
        data : {
            price : 1000,
            quantity : 100,
            title : "product 3",
            description : "desc 3",
            brandName : "name 2",
            brandId : 2,
            category : {connect : [{id : 2},{id : 3}],create : {name : "cat 4"}}
        }
    })

    const cart = await prisma.cART.createMany({
        data :[{
            useId : 1,
        },{
            useId : 2
        }]
    })

    const cartProducts = await prisma.cART_PRODUCT.createMany({
        data : [{
            quantity : 1,
            cartId : 1,
            productId : 1
        },{
            quantity : 2,
            cartId : 1,
            productId : 2
        },{
            quantity : 1,
            cartId : 2,
            productId : 1
        }]
    })


    const reviews = await prisma.rEVIEWS.createMany({
        data : [{
            reviewText : "this is review 1 for product 1 by user 1",
            productId : 1,
            userId :1
        },{
            reviewText : "this is review 2 for product 1 by user 2",
            productId : 1,
            userId :2
        },{
            reviewText : "this is review 3 for product 1 by user 3",
            productId : 1,
            userId :3
        },{
            reviewText : "this is review 1 for product 2 by user 1",
            productId : 2,
            userId :1
        },{
            reviewText : "this is review 2 for product 2 by user 2",
            productId : 2,
            userId :2
        },{
            reviewText : "this is review 1 for product 3 by user 3",
            productId : 3,
            userId :3
        }]
    })

    const wishlist1 = await prisma.wISHLIST.create({
        data : {
            userId : 1,
            products : {connect : [{id : 1},{id : 2}]}
        }
    })
    
    const wishlist2 = await prisma.wISHLIST.create({
        data : {
            userId : 2,
            products : {connect : [{id : 1}]}
        }
    })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })