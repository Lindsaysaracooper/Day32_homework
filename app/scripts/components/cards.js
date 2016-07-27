import React from 'react';
import SingleCard from './singleCard';
import {Link}from 'react-router';

const Cards = React.createClass({
  render: function(){
      return(
        <div>
        <ul>
            <SingleCard
            card = {{
                img: "http://learntarot.com/bigjpgs/maj00.jpg",
                title:'The Fool',
                meaning:'The fool is a very powerful card in the Tarot deck, usually representing a new beginning -- and, consequently, an end to something in your old life. The Fools position in your spread reveals which aspects of your life may be subject to change. The Fool portends important decisions ahead which may not be easy to make, and involve an element of risk for you. Approach the changes with optimism and care to gain the most positive outcome.',
                past:'The risks you have taken and your original thinking have brought you success. By doing things in a new way, you have allowed for great potential.',
                present:'At this moment, you are entering a new phase of life. The experience of this change may seem good or bad now, but its influence will be clearer in the future. Assessing the risks is crucial to making the right choice.',
                future:'In order to succeed, you must find new ways to bring about the achievement of your goals. When the opportunity comes, you must be willing to shed old habits and if it never comes, it may be time to create it for yourself with new methods.'
            }} />
            <SingleCard
            card= {{
                img:"http://learntarot.com/bigjpgs/maj02.jpg",
                title:'The High Priestess',
                meaning:'Your identification with the High Priestess suggests you possess inherent good judgment, in the form of strong intuition. She may indicate that reason should take second place to instinct. Your head must trust in the wisdom of your heart for a change. Yet, she is also an aide by nature, and her presence in certain parts of your spread could be indicative of someone close to you coming to your rescue with their own intuition. Intuition is most effective at seeing what is hidden to the senses, so the High Priestess may also come as a warning of concealed facts or influences that are, or will be, important to you.',
                past:'You have been in need of new experiences and may wander somewhere outside of your comfort zone. If you are lacking support in important areas of your life, you should consider the idea of investing your time in new people and new ideas. You are entering a time of renewal, but you may need the help of another.',
                present:'The undiscovered or repressed creative abilities you have are demanding to be expressed. Finding a spiritual guide will help you realize the full potential of your psychic or artistic abilities. In order to get what you desire, you will need to overcome your fear of commitment.',
                future:'You are on course to receive real rewards, but only if you continue your discipline and motivation. If you reject the attempts to dissuade you, your future is bright. Follow your intuition and you are headed towards the lasting contentment of success.'
            }} />
            <SingleCard
            card = {{
              img:"http://learntarot.com/bigjpgs/maj06.jpg",
                title:'The Lovers',
                meaning:'Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.',
                past:'By becoming more in tune with yourself, you will be more able to connect with others. The emotional burden of a recent conflict will soon be lifted and a successful resolution reached.',
                present:'There is an approaching conflict that will test your values. In order to progress, you are going to have to make a decision between love and career. Neither will disappear forever, but the choice will shape your priorities.',
                future:'It will benefit you to remember that opposites are two sides of the same coin; there is not one without the other. The right choice will be made only if you have accepted others and yourself.'
            }} />
            <SingleCard
            card = {{
                img:"http://learntarot.com/bigjpgs/maj15.jpg",
                title:'The Devil',
                meaning:'The Devil is in the business of entrapment. It signifies a situation from which there is no escape, or a road leading to one. Forewarning may let you avoid the trap, or it may not. What sort of trap, and how you might avoid it, depends on where the Devil appears in your spread, and what other cards surround it. This card does not foretell doom, only the need for prudence.',
                past:'One of the choices youve made was wrong for you. Negative forces are slowing your development',
                present:'There is an event beyond your influence that will change your life. It is uncertain whether it is good or bad, but avoid extravagant behavior and be true to yourself.',
                future:'The time is coming that you will have to find beauty within yourself and stop the projections you are casting on the world. Find the courage to change your life. The course of your life is beyond your knowing, but this awareness will defeat your self-delusions.'
            }} />
            <SingleCard
            card = {{
                img:"http://learntarot.com/bigjpgs/maj18.jpg",
                title:'The Moon',
                meaning:'Something in your life is not what it seems. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself. It may also indicate something important being kept from you by another. This may be a source of worry or depression in your life, and the Moon is a strong indicator that you must rely on your intuition to see through the subterfuge.',
                past:'Your understanding of a past event may be distorted by your current perceptions. Reflect on your history and make sure the pieces fit together. By eliminating uncertainty, you will find more peace.',
                present:'There is a challenge approaching, taking the form of either a new creative project or a conflict in a relationship. Your history will reveal the best course of action.',
                future:'Your imagination will bring you success if your thoughts are coupled with practical action. The struggle to reach your potential may bring about many conflicts in your life, but the results will be beautiful.'
            }} />
            <SingleCard
            card = {{
                img:"http://learntarot.com/bigjpgs/maj09.jpg",
                title:'The Hermit',
                meaning:'There are times in every life, when one must step back and make a careful examination of their situations and decisions. Finding the Hermit in your spread suggests this is just such a time for you. You are in need of a period of inner reflection, away from the current demands of your position. This retreat can be physical, or a search within. Only a deep and honest introspection will lead to a solution, however.',
                past:'The pace of your past has slowed, and it is time to accept this. Continue looking for your finals goals and consider the insight you have recently gained.',
                present:'There is someone who can help you through all your problems, and their insight may surprise you. This person is yourself. By understanding yourself, you can better understand others.',
                future:'When you become aware of your true road, there will be nothing to stand in your way. Life has challenged you, but you are prepared to make the best of the future.'
            }} />

        </ul>
            <Link to="/" > BACK TO HOME </Link>
        </div>


      )
  }
});

export default Cards;
