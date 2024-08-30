const cards = [
    { 
        title: "The Fool", 
        description: "A new beginning, a fresh start.", 
        reversedDescription: "Recklessness, taken advantage of, inconsideration.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_00_Fool.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Fool.mp3"
    },
    { 
        title: "The Magician", 
        description: "Skill, concentration, action.", 
        reversedDescription: "Manipulation, poor planning, untapped talents.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_01_Magician.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Magician.mp3"
    },
    { 
        title: "The High Priestess", 
        description: "Intuition, higher powers, mystery.", 
        reversedDescription: "Secrets, disconnected from intuition, withdrawal.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_02_High_Priestess.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-High-Priestress.mp3"
    },
    { 
        title: "The Empress", 
        description: "Fertility, femininity, beauty.", 
        reversedDescription: "Creative block, dependence on others.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_03_Empress.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Empress.mp3"
    },
    { 
        title: "The Emperor", 
        description: "Authority, establishment, structure.", 
        reversedDescription: "Domination, excessive control, lack of discipline.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_04_Emperor.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Emperor.mp3"
    },
    { 
        title: "The Hierophant", 
        description: "Spiritual wisdom, tradition, conformity.", 
        reversedDescription: "Personal beliefs, freedom, challenging the status quo.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_05_Hierophant.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Hierophant.mp3"
    },
    { 
        title: "The Lovers", 
        description: "Love, harmony, relationships.", 
        reversedDescription: "Disharmony, imbalance, misalignment of values.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_06_Lovers.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Lovers.mp3"
    },
    { 
        title: "The Chariot", 
        description: "Control, willpower, success.", 
        reversedDescription: "Lack of control, lack of direction, aggression.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_07_Chariot.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Chariot.mp3"
    },
    { 
        title: "Strength", 
        description: "Courage, bravery, confidence.", 
        reversedDescription: "Self-doubt, weakness, insecurity.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_08_Strength.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Strength.mp3"
    },
    { 
        title: "The Hermit", 
        description: "Introspection, solitude, reflection.", 
        reversedDescription: "Isolation, loneliness, withdrawal.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_09_Hermit.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Hermit.mp3"
    },
    { 
        title: "Wheel of Fortune", 
        description: "Good luck, karma, life cycles.", 
        reversedDescription: "Bad luck, resistance to change, breaking cycles.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_10_Wheel_of_Fortune.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Wheel-of-Fortune.mp3"
    },
    { 
        title: "Justice", 
        description: "Fairness, truth, cause and effect.", 
        reversedDescription: "Unfairness, lack of accountability, dishonesty.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_11_Justice.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Justice.mp3"
    },
    { 
        title: "The Hanged Man", 
        description: "Pause, surrender, letting go.", 
        reversedDescription: "Delays, resistance, stalling.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_12_Hanged_Man.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Hanged-Man.mp3"
    },
    { 
        title: "Death", 
        description: "Endings, change, transformation.", 
        reversedDescription: "Resistance to change, personal transformation, inner purging.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_13_Death.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Death.mp3"
    },
    { 
        title: "Temperance", 
        description: "Balance, moderation, patience.", 
        reversedDescription: "Imbalance, excess, self-healing.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_14_Temperance.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Temperance.mp3"
    },
    { 
        title: "The Devil", 
        description: "Shadow self, attachment, addiction.", 
        reversedDescription: "Releasing limiting beliefs, exploring dark thoughts, detachment.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_15_Devil.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Devil.mp3"
    },
    { 
        title: "The Tower", 
        description: "Sudden change, upheaval, chaos.", 
        reversedDescription: "Avoidance of disaster, fear of change.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_16_Tower.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Tower.mp3"
    },
    { 
        title: "The Star", 
        description: "Hope, faith, purpose.", 
        reversedDescription: "Lack of faith, despair, discouragement.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_17_Star.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Star.mp3"
    },
    { 
        title: "The Moon", 
        description: "Illusion, fear, anxiety.", 
        reversedDescription: "Release of fear, repressed emotion, inner confusion.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_18_Moon.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Moon.mp3"
    },
    { 
        title: "The Sun", 
        description: "Positivity, fun, warmth.", 
        reversedDescription: "Inner child, feeling down, overly optimistic.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_19_Sun.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-Sun.mp3"
    },
    { 
        title: "Judgement", 
        description: "Judgement, rebirth, inner calling.", 
        reversedDescription: "Self-doubt, refusal of self-examination.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_20_Judgement.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Judgement.mp3"
    },
    { 
        title: "The World", 
        description: "Completion, integration, accomplishment.", 
        reversedDescription: "Seeking personal closure, short-cuts, delays.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_21_World.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/The-World.mp3"
    },
    { 
        title: "Ace of Cups", 
        description: "Love, new relationships, compassion, creativity", 
        reversedDescription: "Self-love, intuition, repressed emotions",
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_01.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ace-of-Cups.mp3"
    },
    { 
        title: "Two of Cups", 
        description: "Unified love, partnership, attraction.", 
        reversedDescription: "Break-up, imbalance in a relationship, lack of harmony.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_02.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Two-of-Cups.mp3"
    },
    { 
        title: "Three of Cups", 
        description: "Celebration, friendship, creativity.", 
        reversedDescription: "An affair, 'three's a crowd', stifled creativity.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_03.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Three-of-Cups.mp3"
    },
    { 
        title: "Four of Cups", 
        description: "Meditation, contemplation, apathy.", 
        reversedDescription: "Retreat, withdrawal, checking in for alignment.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_04.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Four-of-Cups.mp3"
    },
    { 
        title: "Five of Cups", 
        description: "Regret, failure, disappointment.", 
        reversedDescription: "Personal setbacks, self-forgiveness, moving on.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_05.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Five-of-Cups.mp3"
    },
    { 
        title: "Six of Cups", 
        description: "Revisiting the past, childhood memories.", 
        reversedDescription: "Stuck in the past, naivety, unrealistic.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_06.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Six-of-Cups.mp3"
    },
    { 
        title: "Seven of Cups", 
        description: "Opportunities, choices, wishful thinking.", 
        reversedDescription: "Lack of purpose, diversion, confusion.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_07.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Seven-of-Cups.mp3"
    },
    { 
        title: "Eight of Cups", 
        description: "Disappointment, abandonment, withdrawal.", 
        reversedDescription: "Trying one more time, indecision, aimless drifting.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_08.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Eight-of-Cups.mp3"
    },
    { 
        title: "Nine of Cups", 
        description: "Contentment, satisfaction, gratitude.", 
        reversedDescription: "Inner happiness, materialism, dissatisfaction.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_09.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Nine-of-Cups.mp3"
    },
    { 
        title: "Ten of Cups", 
        description: "Divine love, blissful relationships, harmony.", 
        reversedDescription: "Disconnection, misaligned values, struggling relationships.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_10.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ten-of-Cups.mp3"
    },
    { 
        title: "Page of Cups", 
        description: "Creative opportunities, intuitive messages.", 
        reversedDescription: "New ideas, doubting intuition, creative blocks.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_11.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Page-of-Cups.mp3"
    },
    { 
        title: "Knight of Cups", 
        description: "Romance, charm, imagination.", 
        reversedDescription: "Unrealistic, jealous, moody.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_12.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Knight-of-Cups.mp3"
    },
    { 
        title: "Queen of Cups", 
        description: "Compassion, calm, comfort.", 
        reversedDescription: "Emotional insecurity, co-dependency.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_13.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Queen-of-Cups.mp3"
    },
    { 
        title: "King of Cups", 
        description: "Emotional balance, control, generosity.", 
        reversedDescription: "Emotional manipulation, moodiness, volatility.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Cups_14.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/King-of-Cups.mp3"
    },
    { 
        title: "Ace of Pentacles", 
        description: "A new financial or career opportunity.", 
        reversedDescription: "Lost opportunity, lack of planning and foresight.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_01.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ace-of-Pentacles.mp3"
    },
    { 
        title: "Two of Pentacles", 
        description: "Multiple priorities, time management.", 
        reversedDescription: "Over-committed, disorganization, reprioritization.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_02.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Two-of-Pentacles.mp3"
    },
    { 
        title: "Three of Pentacles", 
        description: "Teamwork, collaboration, skill.", 
        reversedDescription: "Disharmony, misalignment, working alone.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_03.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Three-of-Pentacles.mp3"
    },
    { 
        title: "Four of Pentacles", 
        description: "Saving money, security, conservatism.", 
        reversedDescription: "Overspending, greed, self-protection.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_04.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Four-of-Pentacles.mp3"
    },
    { 
        title: "Five of Pentacles", 
        description: "Financial loss, poverty, insecurity.", 
        reversedDescription: "Recovery from financial loss, spiritual poverty.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_05.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Five-of-Pentacles.mp3"
    },
    { 
        title: "Six of Pentacles", 
        description: "Giving, receiving, sharing wealth.", 
        reversedDescription: "Self-care, unpaid debts, one-sided charity.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_06.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Six-of-Pentacles.mp3"
    },
    { 
        title: "Seven of Pentacles", 
        description: "Long-term view, sustainable results.", 
        reversedDescription: "Lack of long-term vision, limited success or reward.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_07.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Seven-of-Pentacles.mp3"
    },
    { 
        title: "Eight of Pentacles", 
        description: "Apprenticeship, repetitive tasks.", 
        reversedDescription: "Self-development, perfectionism, misdirected activity.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_08.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Eight-of-Pentacles.mp3"
    },
    { 
        title: "Nine of Pentacles", 
        description: "Abundance, luxury, self-sufficiency.", 
        reversedDescription: "Self-worth, over-investment in work, hustling.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_09.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Nine-of-Pentacles.mp3"
    },
    { 
        title: "Ten of Pentacles", 
        description: "Wealth, financial security, family.", 
        reversedDescription: "Financial failure, loneliness, loss.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_10.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ten-of-Pentacles.mp3"
    },
    { 
        title: "Page of Pentacles", 
        description: "Manifestation, financial opportunity.", 
        reversedDescription: "Lack of progress, procrastination, learn from failure.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_11.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Page-of-Pentacles.mp3"
    },
    { 
        title: "Knight of Pentacles", 
        description: "Hard work, productivity, routine.", 
        reversedDescription: "Self-discipline, boredom, feeling 'stuck'.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_12.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Knight-of-Pentacles.mp3"
    },
    { 
        title: "Queen of Pentacles", 
        description: "Nurturing, practical, providing financially.", 
        reversedDescription: "Financial independence, self-care, work-home conflict.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_13.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Queen-of-Pentacles.mp3"
    },
    { 
        title: "King of Pentacles", 
        description: "Wealth, business, leadership.", 
        reversedDescription: "Financially inept, obsessed with wealth and status, stubborn.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Pentacles_14.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/King-of-Pentacles.mp3"
    },
    { 
        title: "Ace of Swords", 
        description: "Breakthrough, clarity, sharp mind.", 
        reversedDescription: "Inner clarity, re-thinking an idea, clouded judgement.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_01.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ace-of-Swords.mp3"
    },
    { 
        title: "Two of Swords", 
        description: "Difficult decisions, weighing options.", 
        reversedDescription: "Indecision, confusion, information overload.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_02.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Two-of-Swords.mp3"
    },
    { 
        title: "Three of Swords", 
        description: "Heartbreak, emotional pain, sorrow.", 
        reversedDescription: "Negative self-talk, releasing pain, optimism.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_03.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Three-of-Swords.mp3"
    },
    { 
        title: "Four of Swords", 
        description: "Rest, relaxation, meditation.", 
        reversedDescription: "Exhaustion, burnout, stagnation.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_04.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Four-of-Swords.mp3"
    },
    { 
        title: "Five of Swords", 
        description: "Conflict, disagreements, defeat.", 
        reversedDescription: "Reconciliation, making amends, past resentment.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_05.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Five-of-Swords.mp3"
    },
    { 
        title: "Six of Swords", 
        description: "Transition, change, rite of passage.", 
        reversedDescription: "Personal transition, resistance to change, unfinished business.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_06.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Six-of-Swords.mp3"
    },
    { 
        title: "Seven of Swords", 
        description: "Betrayal, deception, getting away with something.", 
        reversedDescription: "Imposter syndrome, keeping secrets.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_07.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Seven-of-Swords.mp3"
    },
    { 
        title: "Eight of Swords", 
        description: "Isolation, self-imposed restriction.", 
        reversedDescription: "Self-limiting beliefs, inner critic, releasing negative thoughts.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_08.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Eight-of-Swords.mp3"
    },
    { 
        title: "Nine of Swords", 
        description: "Anxiety, worry, fear.", 
        reversedDescription: "Inner turmoil, deep-seated fears, secrets, releasing worry.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_09.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Nine-of-Swords.mp3"
    },
    { 
        title: "Ten of Swords", 
        description: "Painful endings, deep wounds, betrayal.", 
        reversedDescription: "Recovery, regeneration, resisting an inevitable end.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_10.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ten-of-Swords.mp3"
    },
    { 
        title: "Page of Swords", 
        description: "New ideas, curiosity, thirst for knowledge.", 
        reversedDescription: "Self-expression, all talk and no action, haphazard action.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_11.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Page-of-Swords.mp3"
    },
    { 
        title: "Knight of Swords", 
        description: "Ambitious, action-oriented, driven to succeed.", 
        reversedDescription: "Restless, unfocused, impulsive, burn-out.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_12.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Knight-of-Swords.mp3"
    },
    { 
        title: "Queen of Swords", 
        description: "Independent, unbiased judgement.", 
        reversedDescription: "Overly emotional, easily influenced, cold-hearted.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_13.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Queen-of-Swords.mp3"
    },
    { 
        title: "King of Swords", 
        description: "Mental clarity, intellectual power.", 
        reversedDescription: "Manipulative, tyrannical, abusive.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Swords_14.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/King-of-Swords.mp3"
    },
    { 
        title: "Ace of Wands", 
        description: "Inspiration, new opportunities, growth.", 
        reversedDescription: "An emerging idea, lack of direction, distractions, delays.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_01.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ace-of-Wands.mp3"
    },
    { 
        title: "Two of Wands", 
        description: "Future planning, progress, decisions.", 
        reversedDescription: "Personal goals, inner alignment, fear of unknown.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_02.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Two-of-Wands.mp3"
    },
    { 
        title: "Three of Wands", 
        description: "Expansion, foresight, overseas opportunities.", 
        reversedDescription: "Playing small, lack of foresight, unexpected delays.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_03.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Three-of-Wands.mp3"
    },
    { 
        title: "Four of Wands", 
        description: "Celebration, harmony, marriage.", 
        reversedDescription: "Personal celebration, inner harmony, conflict with others.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_04.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Four-of-Wands.mp3"
    },
    { 
        title: "Five of Wands", 
        description: "Conflict, competition, tension.", 
        reversedDescription: "Inner conflict, conflict avoidance, tension release.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_05.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Five-of-Wands.mp3"
    },
    { 
        title: "Six of Wands", 
        description: "Success, public recognition, progress.", 
        reversedDescription: "Private achievement, personal definition of success, fall from grace.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_06.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Six-of-Wands.mp3"
    },
    { 
        title: "Seven of Wands", 
        description: "Challenge, competition, protection.", 
        reversedDescription: "Exhaustion, giving up, overwhelmed.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_07.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Seven-of-Wands.mp3"
    },
    { 
        title: "Eight of Wands", 
        description: "Movement, fast-paced change, alignment.", 
        reversedDescription: "Delays, frustration, resisting change.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_08.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Eight-of-Wands.mp3"
    },
    { 
        title: "Nine of Wands", 
        description: "Resilience, courage, persistence.", 
        reversedDescription: "Inner resources, struggle, overwhelm, defensive.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_09.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Nine-of-Wands.mp3"
    },
    { 
        title: "Ten of Wands", 
        description: "Burden, extra responsibility, hard work.", 
        reversedDescription: "Doing it all, carrying the burden, delegation.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_10.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Ten-of-Wands.mp3"
    },
    { 
        title: "Page of Wands", 
        description: "Inspiration, ideas, discovery.", 
        reversedDescription: "Newly-formed ideas, redirecting energy, self-limiting beliefs.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_11.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Page-of-Wands.mp3"
    },
    { 
        title: "Knight of Wands", 
        description: "Energy, passion, inspired action.", 
        reversedDescription: "Passion project, haste, scattered energy, delays.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_12.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Knight-of-Wands.mp3"
    },
    { 
        title: "Queen of Wands", 
        description: "Courage, confidence, independence.", 
        reversedDescription: "Self-respect, self-confidence, introverted, re-establish sense of self.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_13.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/Queen-of-Wands.mp3"
    },
    { 
        title: "King of Wands", 
        description: "Natural-born leader, vision, entrepreneur.", 
        reversedDescription: "Impulsiveness, haste, ruthless, high expectations.", 
        image: "https://wouterklopping.nl/wp-content/uploads/2024/07/RWS1909_-_Wands_14.jpeg",
        audio: "https://wouterklopping.nl/wp-content/uploads/2024/07/King-of-Wands.mp3"
    }
];

const videoUrls = [
    "https://wouterklopping.nl/wp-content/uploads/2024/07/AI-back-tarot-03-1.mp4",
    "https://wouterklopping.nl/wp-content/uploads/2024/07/AI-back-tarot-04-1.mp4",
    "https://wouterklopping.nl/wp-content/uploads/2024/07/AI-back-tarot-05-1.mp4",
    "https://wouterklopping.nl/wp-content/uploads/2024/07/Mystic-v6.mp4"
];

const cardContainer = document.getElementById('card-container');
const videoCard = document.getElementById('video-card');
const backCardVideo = document.getElementById('back-card-video');
const card = document.getElementById('card');
const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const cardOrientation = document.getElementById('card-orientation');
const cardDescription = document.getElementById('card-description');
const cardAudio = document.getElementById('card-audio');
const audioButtons = document.getElementById('audio-buttons');
const refreshButton = document.getElementById('refresh-button');

let currentCard = null;

function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function isNewDay(lastDrawDate) {
    const now = new Date();
    const last = new Date(lastDrawDate);
    return now.toDateString() !== last.toDateString();
}

function setRandomBackCardVideo() {
    const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    backCardVideo.src = randomVideoUrl;
    backCardVideo.play();
}

function drawCard() {
    let isReversed;
    currentCard = getRandomCard();
    isReversed = Math.random() < 0.5;
    localStorage.setItem('dailyCard', JSON.stringify({ card: currentCard, isReversed }));
    localStorage.setItem('lastDrawDate', new Date().toISOString());

    cardImage.src = currentCard.image;
    cardImage.alt = currentCard.title;
    cardImage.style.transform = isReversed ? 'rotate(180deg)' : 'rotate(0deg)';
    cardTitle.textContent = currentCard.title;
    cardOrientation.textContent = isReversed ? 'Reversed' : 'Upright';
    cardDescription.textContent = isReversed ? currentCard.reversedDescription : currentCard.description;
    cardAudio.src = currentCard.audio;

    videoCard.style.display = 'none';
    card.style.display = 'block';
    audioButtons.style.display = 'flex';
}

function playAudio() {
    cardAudio.play();
}

function refreshCard() {
    localStorage.removeItem('dailyCard');
    localStorage.removeItem('lastDrawDate');
    setRandomBackCardVideo();
    videoCard.style.display = 'flex';
    card.style.display = 'none';
    audioButtons.style.display = 'none';
}

videoCard.addEventListener('click', drawCard);
cardAudio.addEventListener('ended', () => {
    audioButtons.querySelector('button').textContent = 'Play Audio';
});
audioButtons.querySelector('button').addEventListener('click', () => {
    if (cardAudio.paused) {
        cardAudio.play();
        audioButtons.querySelector('button').textContent = 'Pause Audio';
    } else {
        cardAudio.pause();
        audioButtons.querySelector('button').textContent = 'Play Audio';
    }
});
refreshButton.addEventListener('click', refreshCard);

// Check if we're in development mode (you can set this based on your needs)
const isDevelopment = true; // Change this to false for production

if (isDevelopment) {
    refreshButton.style.display = 'inline-block';
}

// Initial setup
setRandomBackCardVideo();

// Check if a card has already been drawn today
const storedCard = localStorage.getItem('dailyCard');
const lastDrawDate = localStorage.getItem('lastDrawDate');

if (storedCard && lastDrawDate && !isNewDay(lastDrawDate)) {
    drawCard(); // Show the previously drawn card
} else {
    videoCard.style.display = 'flex';
    card.style.display = 'none';
    audioButtons.style.display = 'none';
}