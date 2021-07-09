// const stripe = require('stripe')('sk_test_51JArDsSINdHuan3mplAVtitAtqQ4A64CDaDrLY5Oome1H8AQJEoooCnMkAATwFvDUNSeRCcriiqy2hmjpBTsqGdC00O3shszhj');
// const express = require('express');
// const app = express();
// app.use(express.static('.'));

// const YOUR_DOMAIN = 'http://localhost:3000/dashboard/checkout';

// app.post('/dashboard/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });
 
//     res.redirect(303, session.url)

 
// });

// app.listen(4242, () => console.log('Running on port 4242'));