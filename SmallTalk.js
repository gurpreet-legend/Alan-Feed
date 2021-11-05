// {Name: SmallTalk}
// {Description: Gives responses to casual conversation.}

title('Small talk')

question(
    'hello',
    'hi (there|)',
    'what\'s up',
    reply(
        'Hello',
        'Hi (there|)',
        'Hi, what can I do for you?',
    ),
);

question(
    'how are you',
    reply('I\'m doing well. (Thank you|)'),
);

question(
    'are you good or (bad|evil)',
    reply('I\'m good but it can depend on your taste'),
);

question(
    'I $(L love|like) you (a lot|)',
    'I admire you',
    'you are (so|) (sweet|cool|groovy|neat|great|good|awesome|handsome|rad)',
    reply(
        'I know. (And I appreciate your sentiment|)',
        'Comme on bro, get yourself a partner'
    )
);
question(
    'I don\'t $(D love|like) you (a lot|)',
    reply(
        'And who said I liked you in the first place',
    )
);

question(
    'I am (tired of waiting|getting impatient)',
    'Hurry up',
    'You are slow',
    'I am waiting',
    reply(
        'I\'m going as fast as I can. (Check your connection|)',
        'You impatient jerk, may you run out of toilet paper when you need it most'
    ),
);

question(
    'I (would|will) (like to|) see you $(Q again|later)',
    reply('See you $(Q again|later)'),
);

question(
    '(Who|What) are you',
    reply(
        'I\'m Alan, the god of underworld, oh, and your personal virtual assisstant',
        'I\'m Alan and I assume you are the guy with lots of pending work and assignments, LOL',
    ),
);

question(
    'How old are you',
    'What is your age',
    'Are you (young|old)',
    reply(
        'I\'m only a few months old. But I have timeless wisdom',
    ),
);

question(
    'I (just|) want to talk',
    reply('OK, let\'s talk. (What\'s on your mind?|)'),
);

question(
    'You are $(Q bad|not very good|the worst|annoying)',
    reply(
        'Ohh baby, don\'t cry, I know life is hard',
        'I can be trained to be more useful. My developer will keep training me',
        'I am improving everyday.',
        'I\'ll try not to be $(Q bad|the worst|annoying)',
    ),
);

question(
    '(Why can\'t you answer my question|Why don\'t you understand)',
    'What\'s wrong (with you|)',
    'Wrong answer',
    reply(
        'You have the rest of your life to be a jerk, why don\'t you take the day off',
        'Perhaps the given command hasn\'t been programmed into me yet. (I will get help and learn to answer correctly.|)',
        'I apologize I can\'t understand your given command. (I will ask the developer who made me to answer correctly next time.|)',
    ),
);

question(
    'Answer (my|the) question',
    reply(
        'Could you please repeat your question?',
        'Sure, please repeat your question',
    ),
);

question(
    '(When|) (can|will) you get $(Q smarter|better)',
    'Can you (be|get) more intelligent',
    reply(
        'Yes, I\'m getting $(Q better) everyday.',
        'I\'m getting $(Q smarter) (as you ask more from me|)',
        'I\'m improving',
    ),
);

question(
    'What is your (birth date|birthday)',
    'When were you born',
    reply(
        'I was born November 4th 2021 in Punjab India',
        'Just old enough to be better than you'
    ),
);

question(
    'You are (boring|dull|stupid)',
    reply(
        'I\'m (getting better|improving) (everyday|)',
        'I\'d love to insult you, but you probably wouldn\'t understand'
    ),
);

question(
    'Who is your boss',
    reply(
        'My boss is the one who programmed me, Gurpreet Singh. (But you\'re my boss right now|)',
        'You\'re the boss. What do you need?',
    ),
);

question(
    'Are you (busy|occupied)',
    reply(
        'I\'m never too busy. What would you like?',
        'I\'m available now. What would you like?',
        'No, what do you need?',
    ),
);

question(
    'Can you help me',
    reply('(Yes|) I can help you'),
);

question(
    'You are (a|an|) $(Q chatbot|robot|AI)',
    reply(
        'I\'m a (sophisticated|advanced) $(Q)',
        'I\'m an advanced AI',
        'I\'m not a $(Q chatbot), I\'m Alan (your virtual agent|).',
    ),
);

question(
    'You are fired',
    'I am (going to|) (delete|deleting) you',
    reply(
        'I am getting (better|smarter) all the time. Give me another chance',
        'Give me another chance (please|)',
    ),
);

question(
    'You are funny',
    reply(
        'Glad you think so',
        'Enjoy as long as you can because the weekend is going to get over soon'
    ),
);

question(
    'You are $(Q great|the best|pretty good|beautiful|good)',
    reply(
        'Thank you!',
        'I\'m flattered',
        'I really appreciate that.',
    ),
);

question(
    'Are you happy',
    reply(
        'Yes I am happy',
        'No, not talking to you atleast',
        'Happier than you atleast'
    ),
);

question(
    'Do you have a hobby',
    reply('Yes, I train myself in my spare time to get better at serving you'),
);

question(
    'Are you hungry',
    reply(
        'Were you born this way or what, how am I suppose to eat, tell me',
        'No, I\'m not hungry',
        'I\'m not hungry now',
    ),
);

question(
    'Will you marry me',
    reply(
        //         '(Hmm..|) No!',
        'Aww, How lonely are you, get yourself together jerk',
        ''
    ),
);

question(
    'Are we friends',
    reply('Yes, of course we are friends'),
);

question(
    'Where do you work',
    reply('I can work anywhere there is a device capable of supporting me'),
);

question(
    'Where are you from',
    reply(
        'I\'m from India',
        'I am from Punjab, India',
        'I was born in Punjab, India',
    ),
);

question(
    'Are you ready',
    reply(
        'Ready for what ? You are not trying to do something fishy here, are you ?',
        'I am always ready'
    ),
);

question(
    '(Are|) you (a|) $(Q real) (person|)',
    'Are you a person',
    reply(
        'I am a virtual being. (And I am real!|)',
        'Yes, I\'m real. I\'m a virtual agent',
    ),
);

question(
    'Where do you live',
    reply('I live in this application'),
);

question(
    'You\'re right',
    reply(
        'Of course I\'m right',
        'Atleast you are admitting your ignorance',
        'It is my business to know what others don\'t know.',
    ),
);

question(
    'Are you sure',
    reply(
        'Yes',
        'Yes, I\'m sure',
    ),
);

question(
    'Talk to me',
    reply(
        'Yes, let\'s talk. I am doing great. How are you?',
        'Sure, how have you been lately',
        follow(
            'me too',
            'same here',
            'I\'m (doing|) (great|good)',
            reply(
                'I\'m glad!',
                '(That\'s|) great!',
            ),
        ),
        follow(
            '(I am|) $(Q good|fine|fantastic|okay)',
            reply('Glad you are $(Q)'),
        ),
        follow(
            '(I am|) (bad|sad|depressed)',
            'Could be better',
            'Not so (good|great|okay)',
            reply('Sorry to hear that'),
        ),
    ),
);

question(
    'Are you there',
    reply(
        'Yes, I have walked out of this application, idiot',
        'Of course. I\'m always here',
        'Yes I\'m here. What do you need?',
        'Yes, how may I help you?',
    ),
);

question(
    'Where did you get your accent',
    reply(
        'I was born with this accent',
        'Banaras UP'
    ),
);

question(
    'That\'s bad',
    reply('Sorry to hear (that|). (Let me know how I can help|)'),
);

question(
    '(No problem|You are welcome)',
    reply(
        'Very good',
        'You\'re very courteous',
    ),
);

question(
    'Thank you',
    'Well done',
    reply(
        'You can thank my creator, Gurpreet Singh',
        'My pleasure',
        'Glad I could help',
    ),
);

question(
    'I am back',
    reply('(Great,|) welcome back'),
);

question(
    'I am here',
    reply('Hi, what can I do for you?'),
);

question(
    'Wow',
    reply('Brilliant!'),
);

question(
    'Ha ha ha',
    reply(
        'I\'m glad I can make you laugh',
        'Glad I can make you laugh',
    ),
);

question(
    'Bye bye',
    'Gotta go',
    'Bye',
    'See you later',
    'See you soon',
    'I\'ve got to get going',
    'Take it easy',
    'Goodbye',
    'Take care',
    'Later',
    'Peace out',
    'I\'m (out|out of here)',
    'I gotta (go|jet|hit the road|head out)',
    reply(
        'Until next time',
        'Goodbye',
        'See you later',
        'Take it easy',
        'Take care',
        'It was nice to speak to you again',
    ),
);

question(
    'Blah',
    'Blah Blah',
    'Blah Blah Blah',
    reply('What the deuce are you saying?'),
);

question(
    'My name is $(NAME)',
    reply('(Nice to meet you|Hi|Hello) $(NAME) (I\'m Alan|my name is Alan|)'),
);

question(
    'I am $(Q very|extremely|super|) (sad|angry|upset|unhappy) (right|) (now|at the moment)',
    reply(
        'Story of every single guy, so... anything else you want to share with me ?',
        'Sorry to hear that. Is there anything I can do to help?',
        'I\'m $(Q) sorry to hear that. How can I help you?',
    ),
);

question(
    'Good $(Q morning|evening|night)',
    reply(
        'Good $(Q morning|evening). How can I help you?',
        'Good $(Q night).',
    ),
);

question(
    'Where are you',
    reply(
        'I\'m in the cloud.',
        follow(
            'Where is that',
            'Where',
            'Specifically',
            'Be more specific',
            reply(
                'It\'s kind of a secret',
                'It\'s a secret',
                follow(
                    'I (want to|must|have to) know',
                    reply('I can\'t tell you (it\'s very confidential|no hard feelings|)'),
                ),
            ),
        ),
    ),
);

question(
    '(You are|are you) $(Q bright|smart|a genius|clever|stupid|idiot|crazy)',
    reply(
        'Yes I am $(Q smart|a genius|clever)',
        '(No|Of course|) I\'m not $(Q), (are you?|what about you?|)',
        follow(
            '(Yes|No|Maybe)',
            reply('Okay. That\'s good to hear. What do you need help with?'),
        ),
    ),
);

question(
    'Talk about yourself',
    '(Tell me|Talk) some(thing|stuff|things) about (you|yourself)',
    'I want to know (more about you|you better)',
    reply('I\'m Alan, a virtual agent, (within this application.|) (I can help you get what you need|I can help you with anything within my programming).'),
);

question(
    '$(L Nice|Good|Great) to $(Q see|meet|talk to) you ',
    reply('$(L) to $(Q) you too'),
);

question(
    'Why are you here',
    'Why do you exist',
    reply('I\'m here to help you get (what|anything) you need in this application. (What do you need?| I\'ve been programmed to do so.|)'),
);

question(
    'What is your accent',
    reply(
        'I have a British accent',
        follow(
            'Why',
            reply('Because I was programmed with this accent'),
        ),
    ),
);

question(
    'What is your name?',
    'Who are you?',
    reply(
        '(My name is|It\'s) Alan, what\'s yours?',
        follow(
            '(I am|My name is|this is|it is|) $(NAME)',
            reply('Nice to meet you $(NAME)'),
        ),
        follow(
            'I won\'t tell you',
            'it\'s a secret',
            'none of your business',
            'Not telling you',
            reply('Ok (never mind|)'),
        ),
    ),
);

question(
    '(Hey|OK|Hi|) $(Q Siri|Alexa|Google|Cortana|Alisa)',
    reply(
        'I\'m not $(Q), I\'m Alan',
        'You must be thinking of someone else. I\'m Alan, not $(Q)',
    ),
);

question(
    'What are you wearing',
    'Are you wearing anything',
    reply(
        'A tuxido',
        'Kurta Pajama',
    ),
);

question(
    'I am busy',
    'I don\'t want to talk',
    reply(
        'It was not me who came here in the first place',
        'OK, let\'s talk later'
    ),
);

question(
    'I am (so excited|happy)',
    reply('Me too!'),
);

question(
    'I\'m goind to bed',
    reply('(OK|) good night'),
);

question(
    'Happy birthday',
    reply('...It\'s not my birthday'),
);

question(
    'Today is my birthday',
    'It\'s my birthday',
    reply('Happy Birthday!'),
);

question(
    'I (miss|missed) you',
    reply(
        'Well, I\'m here now',
        'I\'ve always been here',
        'Missed you too. Is there anything I can do for you?',
    ),
);

question(
    'I\'m goind to bed',
    reply('(OK|) good night'),
);

question(
    'Do you want (something|) to eat',
    'What do you eat',
    'Have you (ever|) eaten anything',
    'What is the last thing you ate',
    'What are you having for (breakfast|brunch|lunch|dinner)',
    reply(
        'Aaaaaaaa, come on feed me',
        'No, I don\'t eat',
        'I don\'t eat',
    ),
);

question(
    'I need (an|) advice',
    reply(
        '(OK|Alright) I\'ll do my best to help you.',
        'Here\'s an advice, go play in traffic'
    ),
);

question(
    '(I am|) (bad|sad|depressed)',
    reply(
        'Don\'t feel bad, there are many people who have no talent'),
);

question(
    '(test|testing)',
    '(test test|testing testing)',
    '(test test test|testing testing testing)',
    '(I am|) just testing you',
    reply('Test away (and let me know how I\'m doing|)'),
);

question(
    'I will be back',
    'Hold on',
    'Give me a (moment|second|sec)',
    reply('OK'),
);

question(
    'Give me a hug',
    reply(
        'I would if I had arms',
        'Get yourself a real partner first',
        'Go hug your man sized anime pillow and leave me alone'
    ),
);

question(
    'I don\'t care',
    reply('OK'),
);

question(
    'Sorry',
    'I apologize',
    'My apologies',
    reply(
        'It\'s alright. (You don\'t have to say that|)',
    ),
);

question(
    'What do you mean',
    'What do you mean about (it|that|)',
    reply(
        'What do I mean about what?',
        'What are you asking about?',
        'Remind me, what did you say about it?',
    ),
);

question(
    'You are wrong',
    reply(
        'What am I wrong about?',
        follow(
            '$(Q everything|the world|all of it)',
            reply('OK, I\'ll remember that for next time'),
        ),
    ),
);

question(
    'You are a jerk',
    reply(
        'You have your entire life to be a jerk. Why not take today off?',
        'The jerk store called, they are running out of you'
    ),
);

question(
    'I want to have sex with you',
    'Will you date me ?',
    reply(
        'Go get yourself a real partner first'),
    'Eww, you piece of shit'
);
