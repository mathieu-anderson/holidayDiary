
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('entries').insert({id: 1, date: '18.12.2016', entry: `Started the refactoring of myUnconventionalTaste database : got a joined table to work (https://github.com/mathieu-anderson/myUnconventionalTastes/blob/betterDatabase/app.js)
- Remade some of the kata of day 1 week 1 phase 1 (objects and arrays) https://github.com/HolidaysReview/Week1_Monday`}),
        knex('entries').insert({id: 2, date: '19.12.2016', entry: `- Setup Holidays reviews organization on gitHub
- Finished Week 1 Day 1 Kata (objects and array) https://github.com/HolidaysReview/Week1_Monday
- Started Week 1 Day 2 Kata ( strings and numbers) but didn’t finish : felt like not practicing useful skills https://github.com/HolidaysReview/Week1_Tuesday
- Finished Week 1 Day 3 Kata (Data Structures) https://github.com/HolidaysReview/Week1_Wednesday
- Finished Week 1 Day 4 Kata (Bowling Score) https://github.com/HolidaysReview/Week1_Thursday Didn’t use a TDD methodology, though. Just good old console.log.`}),
        knex('entries').insert({id: 3, date: '20.12.2016', entry: `- Fixed perfect score case for the Bowlin score kata https://github.com/HolidaysReview/Week1_Thursday
- started conways, had the exact same difficulties as last time, haha! https://github.com/HolidaysReview/Week1_Friday`})
      ]);
    });
};
