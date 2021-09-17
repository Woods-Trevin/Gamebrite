'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Events', [
      {
        imageURL: 'https://mobilemodegaming.com/wp-content/uploads/2019/05/filters_quality40_background_colorwhite_formatjpeg-1685946942349812939.-1.jpg',
        title: 'Mobile MLG',
        game: 'DOTA2',
        organizer: 'MLG Productions',
        description: 'This is an event for all ages! Mobile gaming is niche but we will help to increase its popularity one event at a time. Please Join us this weekend!',
        gameType: 'Mobile',
        startDate: '2022-08-23',
        endDate: '2022-09-25',
        ticketsCapacity: 100,
        price: 0,
        startTime: '12:30',
        endTime: '12:30',
        onlineEventUrl: '',
        categoryId: 3,
        hostId: 1,
        venueId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://img.gurugamer.com/resize/1200x-/2019/10/18/3449739-blackops4-fortnite-pubg-32bc.jpg',
        title: 'Team Optic Tryouts',
        game: 'Call of Duty',
        organizer: 'Optic Gaming',
        description: 'This is an event for all ages! We are asking for the best of the best gamers to come out and show their stuff. Must be 18+ and be able to relocate. If below 18 we ask that you have aparent or gaurdian sign some documents before you can try out. Please Join us this weekend!',
        gameType: 'FPS',
        startDate: '2022-08-27',
        endDate: '2022-03-25',
        ticketsCapacity: 300,
        price: 0,
        startTime: '12:30',
        endTime: '12:30',
        onlineEventUrl: '',
        categoryId: 4,
        hostId: 1,
        venueId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://i0.wp.com/www.gamingguidetips.com/wp-content/uploads/2019/03/Best-Switch-RPG-Games.jpg?resize=720%2C276&ssl=1',
        title: 'Sekiro Challenge',
        game: 'Run',
        organizer: 'MLG Productions',
        description: 'Come one come all! This event is for the best sekiro players in the world. The goal is to complete the game in 4 months. First Prize is $50,000. There is also a second and third place prize. Do you have what it takes?! Please Join us this weekend!',
        gameType: 'RPG',
        startDate: '2022-08-23',
        endDate: '2022-11-23',
        ticketsCapacity: 0,
        price: 0,
        startTime: '12:30',
        endTime: '18:30',
        onlineEventUrl: '',
        categoryId: 1,
        hostId: 2,
        venueId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://i1.wp.com/www.mobileworldlive.com/wp-content/uploads/2019/06/mobile-game-shutterstock-650-e1560299964919.jpg?fit=650%2C401&ssl=1',
        title: 'Mobile LFG',
        game: 'Diablo Immortal',
        organizer: 'Solo Player',
        description: 'Just a solo player LFG! Mobile gaming is niche but doesnt mean there arent those out there still looking for other players to play with. If you are interested in running a rift or two. Please respond to this event! Must be lvl200+ and epic rarity gear  Please Join us this weekend!',
        gameType: 'Mobile',
        startDate: '2022-08-23',
        endDate: '2022-08-23',
        ticketsCapacity: 0,
        price: 0,
        startTime: '14:30',
        endTime: '00:00',
        onlineEventUrl: '',
        categoryId: 5,
        hostId: 3,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://qrius.com/wp-content/uploads/2020/10/qrius.com-IMG.jpg',
        title: 'Madden MLG',
        game: 'Madden',
        organizer: 'MLG Productions',
        description: 'This is an event for all ages! Is your ultimate team the best? Do you stomp on the noobs in pubs with little effort? Then Join us at this event and test your skills against the very best! Must be 18+ to enter. NO KIDS ALLOWED.  Please Join us this weekend!',
        gameType: 'Sports',
        startDate: '2022-09-18',
        endDate: '2022-09-20',
        ticketsCapacity: 120,
        price: 30,
        startTime: '14:30',
        endTime: '14:30',
        onlineEventUrl: '',
        categoryId: 1,
        hostId: 2,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://img.gurugamer.com/resize/1200x-/2019/10/18/3449739-blackops4-fortnite-pubg-32bc.jpg',
        title: 'Fortnite All Night',
        game: 'Fortnite',
        organizer: 'Twitch',
        description: 'Join us this weekend as we put on a all night all weekend stream for red cross. If you are old enough to donate to the cause we would appreciate it. Kids dont take your parents wallet/credit cards and get us in trouble!',
        gameType: 'FPS',
        startDate: '2022-04-15',
        endDate: '2022-04-17',
        ticketsCapacity: 500,
        price: 5,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: 'https://www.twitch.tv/FortniteForRedCross',
        categoryId: 8,
        hostId: 3,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://www.tournaments-organizers.com/wp-content/uploads/2021/05/Top-Moba.jpg',
        title: 'Smite Smackdown',
        game: 'Smite',
        organizer: 'MLG Productions',
        description: 'Join us this weekend if you think you have the guts. Do you have a team that can compete with the best? Join us this weekend and find out just how good you are!!!',
        gameType: 'MOBA',
        startDate: '2022-04-25',
        endDate: '2022-04-28',
        ticketsCapacity: 350,
        price: 15,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: '',
        categoryId: 4,
        hostId: 4,
        venueId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://s3.envato.com/files/78652366/Image%20Preview.jpg',
        title: 'Go Association Meetup',
        game: 'Go',
        organizer: 'American Go Association',
        description: 'How good are you at this ancient board game? Whether you are a 30 Kyu or 9dan professional we want you to come out and promote the game of GO. Kids under 18 should have a gaurdian present for them to be admitted into the venue',
        gameType: 'Strategy',
        startDate: '2022-04-25',
        endDate: '2022-04-28',
        ticketsCapacity: 150,
        price: 5,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: 'https://www.usgo.org/',
        categoryId: 4,
        hostId: 5,
        venueId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://i.ytimg.com/vi/ZX0hlrmgDcU/maxresdefault.jpg',
        title: 'Conflict of Nations Battle Royal',
        game: 'Conflict of Nations',
        organizer: 'MLG Productions',
        description: 'choose your nation and go to war. Will you be the last man standing? Join millions of players on the Conflict of Nations battlefields right now! For free. In your browser. Easy to play. Real-world. In real-time. A+ Community. Grand Strategy. A+ Gameplay. 100+ Units. Real opponents.',
        gameType: 'Strategy',
        startDate: '2022-04-25',
        endDate: '2022-04-28',
        ticketsCapacity: 300,
        price: 20,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: 'https://www.conflictnations.com/index.php?id=322&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI-DI7i_NTJJLWubAbd3H9ze3X_KQ4707JNJyFa3t0ZKLQrU54-o4AAaAnGyEALw_wcB',
        categoryId: 4,
        hostId: 1,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://www.appolicious.com/wp-content/uploads/2012/08/citybuilding.jpg',
        title: 'The Sims 4 House Pary',
        game: 'The Sims 4',
        organizer: 'Sims Lovers Union',
        description: 'We’re celebrating you and all the rest of our amazing players! Join the party and meet some of the Simmers making a difference in the game and the community. The Sims 4 is the life simulation game that gives you the power to create and control people. Experience the creativity, humor, escape, and the freedom to play with life in The Sims 4. Try the Create A Sim demo to create your own Sim!',
        gameType: 'Simulation',
        startDate: '2022-07-25',
        endDate: '2022-07-28',
        ticketsCapacity: 0,
        price: 20,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: '',
        categoryId: 3,
        hostId: 1,
        venueId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://fscl01.fonpit.de/userfiles/7446224/image/xiaomi-blackshark-2/AndroidPIT-xiaomi-blackshark-2-gaming-w1400h788.jpg',
        title: 'Bleach: Brave Souls Epic Raid',
        game: 'Bleach: Brave Souls',
        organizer: 'KLab Global Pte. Ltd',
        description: 'The setting consist of an unknown giant Colosseum with a huge stationary boss in the center. The mode is time-limited, but will only consume one Soul Ticket per participants if the boss is defeated. The players must defeat the boss (while it is performing various map-sized one-shot mechanics) before the time runs out, or the team loses. Also the boss fight is divided into 3 phases, with each phases the bosses attacks become more complex, faster, and more destructive. The players team is given a specified number of revival according to the difficulty of the mode. In the Epic Raid prep room, the player can configure their characters the same way as Senkaimon Quest.',
        gameType: 'Mobile',
        startDate: '2022-02-25',
        endDate: '2022-02-25',
        ticketsCapacity: 0,
        price: 0,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: '',
        categoryId: 5,
        hostId: 3,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://www.pockettactics.com/wp-content/uploads/2021/09/best-mobile-games-900x506.jpg',
        title: '7DS DeathMatch LFG',
        game: '7 Deadly Sins Mobile',
        organizer: 'NETMARBLE',
        description: 'Cooperate with friends to take down a giant demon in Death Match mode, and enjoy exciting and diverse PvP content. Enjoy Death Match, 2-player cooperative content played in real time! Defeat demons with a friend before time expires to defend the kingdom! An Arena where you can compete with players all around the world awaits. Find your own strategy to win!',
        gameType: 'Mobile',
        startDate: '2022-04-25',
        endDate: '2022-04-25',
        ticketsCapacity: 0,
        price: 0,
        startTime: '16:30',
        endTime: '20:30',
        onlineEventUrl: '',
        categoryId: 3,
        hostId: 2,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://img.cinemablend.com/filter:scale/quill/c/8/a/6/b/d/c8a6bd2e8b91f1bde3fc5d832e32efdeecefd526.jpg?mw=600',
        title: '7DS DeathMatch LFG',
        game: '7 Deadly Sins Mobile',
        organizer: 'NETMARBLE',
        description: 'Cooperate with friends to take down a giant demon in Death Match mode, and enjoy exciting and diverse PvP content. Enjoy Death Match, 2-player cooperative content played in real time! Defeat demons with a friend before time expires to defend the kingdom! An Arena where you can compete with players all around the world awaits. Find your own strategy to win!',
        gameType: 'Mobile',
        startDate: '2022-04-25',
        endDate: '2022-04-25',
        ticketsCapacity: 0,
        price: 0,
        startTime: '16:30',
        endTime: '20:30',
        onlineEventUrl: '',
        categoryId: 3,
        hostId: 2,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://i0.wp.com/www.gamingguidetips.com/wp-content/uploads/2019/03/Best-Switch-RPG-Games.jpg?resize=720%2C276&ssl=1',
        title: 'Witcher III: Wild Hunt Stream For Green Peace',
        game: 'Witcher III: Wild Hunt',
        organizer: 'Twitch',
        description: 'Join us this weekend as we put on a all night all weekend stream for Green Peace to save the whales! If you are old enough to donate to the cause we would appreciate it. Kids dont take your parents wallet/credit cards and get us in trouble!',
        gameType: 'RPG',
        startDate: '2022-04-22',
        endDate: '2022-04-24',
        ticketsCapacity: 500,
        price: 5,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: 'https://www.twitch.tv/WitcherIII:WildHuntStreamForGreenPeace',
        categoryId: 8,
        hostId: 4,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageURL: 'https://heavy.com/wp-content/uploads/2014/12/fable-mass-effect-3.jpg?quality=65&strip=all',
        title: 'Mass Effect 3 Live Stream For The Culture',
        game: 'Mass Effect 3',
        organizer: 'Twitch',
        description: 'Mass Effect 3 is an action role-playing video game developed by BioWare and published by Electronic Arts. The third major entry in the Mass Effect series and the final installment of the original trilogy, it was released in March 2012 for Microsoft Windows, Xbox 360, and PlayStation 3.',
        gameType: 'RPG',
        startDate: '2022-04-22',
        endDate: '2022-04-24',
        ticketsCapacity: 0,
        price: 0,
        startTime: '15:30',
        endTime: '15:30',
        onlineEventUrl: 'https://www.twitch.tv/MassEffect3LiveStreamfortheculture',
        categoryId: 3,
        hostId: 1,
        venueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
