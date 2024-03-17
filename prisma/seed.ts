// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const Pancakes = await prisma.recipe.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       id: 10001,
//       name: 'Pancakes',
//       type: 'Breakfast',
//       calories: 300,
//       photo:
//         'https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2019/08/1066536-v-1500x1500.jpg',
//       ingredients: ['milk', 'eggs', 'wheat oat', 'oil'],
//       description: 'Mix all and put on frying pan',
//     },
//   });
//   const Sandwiches = await prisma.recipe.upsert({
//     where: { id: 2 },
//     update: {},
//     create: {
//       id: 10002,
//       name: 'Sandwiches',
//       type: 'Second Breakfast',
//       calories: 400,
//       photo:
//         'https://akademiasmaku.pl/upload/recipes/1136/kanapki-pielgrzyma-1136.jpg',
//       ingredients: ['bread', 'ham', 'butter'],
//       description: 'Cut the bread, put on bread some butter and ham',
//     },
//   });
//   const Spaghetti = await prisma.recipe.upsert({
//     where: { id: 3 },
//     update: {},
//     create: {
//       id: 10003,
//       name: 'Spaghetti',
//       type: 'Dinner',
//       calories: 500,
//       photo:
//         'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_01.jpg',
//       ingredients: ['noodles', 'chicken', 'tomatoes'],
//       description:
//         'Boil the water for noodles, put them inside, put chicken and tomatoes on frying pan, mix all',
//     },
//   });
//   const Cake = await prisma.recipe.upsert({
//     where: { id: 4 },
//     update: {},
//     create: {
//       id: 10004,
//       name: 'Cake',
//       type: 'Tea',
//       calories: 600,
//       photo:
//         'https://staticsmaker.iplsc.com/smaker_production_2022_04_22/6e1a433da66fa7a6f423122caa5eb1e9-content.jpg',
//       ingredients: ['milk', 'eggs', 'wheat oat', 'oil'],
//       description: 'Mix all and put to oven',
//     },
//   });

//   const Soup = await prisma.recipe.upsert({
//     where: { id: 5 },
//     update: {},
//     create: {
//       id: 10005,
//       name: 'Soup',
//       type: 'Supper',
//       calories: 700,
//       photo:
//         'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa-meksykanska-z-batatami-kurczakiem-soczewica-00.jpg',
//       ingredients: ['chicken', 'carrot', 'potatoes', 'onion'],
//       description: 'Cut everything and put it to the boiling water',
//     },
//   });

//   const OatsWithMilk = await prisma.recipe.upsert({
//     where: { id: 6 },
//     update: {},
//     create: {
//       id: 10006,
//       name: 'Oats with milk',
//       type: 'Supper',
//       calories: 800,
//       photo:
//         'https://polki.pl/foto/4_3_LARGE/platki-sniadaniowe-i-mleko-niebianskie-polaczenie-2228265.jpg',
//       ingredients: ['milk', 'oats'],
//       description: 'Cut everything and put it to the boiling water',
//     },
//   });

//   const Push = await prisma.workout.upsert({
//     where: { id: 7 },
//     update: {},
//     create: {
//       id: 10001,
//       name: 'Push',
//       exercises: ['dumbbell press', 'barbell press'],
//     },
//   });

//   const Pull = await prisma.workout.upsert({
//     where: { id: 8 },
//     update: {},
//     create: {
//       id: 10002,
//       name: 'Pull',
//       exercises: ['pull up', 'bent-over row'],
//     },
//   });

//   const Upper = await prisma.workout.upsert({
//     where: { id: 9 },
//     update: {},
//     create: {
//       id: 10003,
//       name: 'Upper',
//       exercises: ['barbell press', 'incline dumbbell press'],
//     },
//   });

//   const Lower = await prisma.workout.upsert({
//     where: { id: 10 },
//     update: {},
//     create: {
//       id: 10004,
//       name: 'Lower',
//       exercises: ['squats', 'romanian deadlift'],
//     },
//   });

//   const FBW_1 = await prisma.workout.upsert({
//     where: { id: 11 },
//     update: {},
//     create: {
//       id: 10005,
//       name: 'FBW 1',
//       exercises: ['squats', 'overhead press'],
//     },
//   });

//   const FBW_2 = await prisma.workout.upsert({
//     where: { id: 12 },
//     update: {},
//     create: {
//       id: 10006,
//       name: 'FBW 2',
//       exercises: ['dumbbell row', 'close-grip bench press'],
//     },
//   });

//   const FBW_3 = await prisma.workout.upsert({
//     where: { id: 13 },
//     update: {},
//     create: {
//       id: 10007,
//       name: 'FBW 3',
//       exercises: ['lying leg curl', 'barbell press'],
//     },
//   });

//   const Milk = await prisma.product.upsert({
//     where: { id: 14 },
//     update: {},
//     create: {
//       id: 10001,
//       name: 'Milk',
//       calories: 100,
//       protein: 10,
//       carbohydrate: 5,
//       fat: 2,
//     },
//   });

//   const Ham = await prisma.product.upsert({
//     where: { id: 15 },
//     update: {},
//     create: {
//       id: 10002,
//       name: 'Ham',
//       calories: 80,
//       protein: 20,
//       carbohydrate: 2,
//       fat: 20,
//     },
//   });

//   const Tomato = await prisma.product.upsert({
//     where: { id: 16 },
//     update: {},
//     create: {
//       id: 10003,
//       name: 'Tomato',
//       calories: 30,
//       protein: 2,
//       carbohydrate: 10,
//       fat: 1,
//     },
//   });

//   const Chicken = await prisma.product.upsert({
//     where: { id: 17 },
//     update: {},
//     create: {
//       id: 10004,
//       name: 'Chicken',
//       calories: 100,
//       protein: 30,
//       carbohydrate: 2,
//       fat: 5,
//     },
//   });

//   const Potato = await prisma.product.upsert({
//     where: { id: 18 },
//     update: {},
//     create: {
//       id: 10005,
//       name: 'Potato',
//       calories: 80,
//       protein: 3,
//       carbohydrate: 15,
//       fat: 3,
//     },
//   });

//   const Cheese = await prisma.product.upsert({
//     where: { id: 19 },
//     update: {},
//     create: {
//       id: 10006,
//       name: 'Cheese',
//       calories: 200,
//       protein: 2,
//       carbohydrate: 10,
//       fat: 30,
//     },
//   });

//   const Oats = await prisma.product.upsert({
//     where: { id: 20 },
//     update: {},
//     create: {
//       id: 10007,
//       name: 'Oats',
//       calories: 180,
//       protein: 5,
//       carbohydrate: 30,
//       fat: 2,
//     },
//   });

//   const Bread = await prisma.product.upsert({
//     where: { id: 21 },
//     update: {},
//     create: {
//       id: 10008,
//       name: 'Bread',
//       calories: 150,
//       protein: 6,
//       carbohydrate: 23,
//       fat: 7,
//     },
//   });
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
