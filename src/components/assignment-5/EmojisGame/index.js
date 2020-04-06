import React from 'react'
import Header from '../Header/index.js';
import {Wrapper,Child} from './StyledComponents'
import EmojiCard from '../EmojiCard/index';
import HowToPlay from '../HowToPlay/index'
import WinOrLoose from '../WinOrLoose/index'
class EmojisGame extends React.Component{
    state={
        score:0,
        topScore:0,
        gameStatus:'Playing',
        theme:'light',
        emojiData:[],
        triggredEmojisList:[] 
    }
    getData=()=>{
        const emojiData=[
            {id:1,
            src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png',
            name:'Exploading Head'
            },
            {id:2,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png',
                name:'Grinning Face with Sweat'
            },
            {id:3,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png',
                name:'Smiling Face with Heart-Eyes'
            },
            {id:4,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png',
                name:'Smirking Face'
            },
            {id:5,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png',
                name:'Thinking Face'
            },
            {id:6,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png',
                name:'Winking Face'
            },
            {id:7,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png',
                name:'Grinning Face'
            },
            {id:8,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png',
                name:'Crying Face'
            },
            {id:9,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png',
                name:'Astonished Face'
            },
            {id:10,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png',
                name:'Face with Tears of Joy'
            },
            {id:11,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png',
                name:'Star-Struck'
            },
            {id:12,
                src:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png',
                name:'Winking Face with Tongue'
            }
        ]
    return emojiData
    }
    onEmojiClick=(id)=>{
        const triggredEmojisList=this.state.triggredEmojisList
        if(!triggredEmojisList.includes(id) && triggredEmojisList.length!==11){
        triggredEmojisList.push(id);
        const emojisData=this.shuffleEmojis()
        const score=this.incrementScore()
        this.setState({
            emojisData,
            score,
            triggredEmojisList,
        })
        }
        else if(!triggredEmojisList.includes(id) && triggredEmojisList.length===11){
            const score=this.incrementScore()
            this.setState({
                gameStatus:'Won',
                score,
            })
        }
        else{
            this.setState({
                gameStatus:'Loose',
            })
        }
    }
    shuffleEmojis=(d)=>{
        const emojis=this.state.emojiData
        let  currentIndex = emojis.length,
        temporaryValue,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = emojis[currentIndex];
        emojis[currentIndex] = emojis[randomIndex];
        emojis[randomIndex] = temporaryValue;
      }
     return emojis  
    }
    incrementScore=()=>{
        const updateScore=this.state.score+1
        return updateScore
    }
    onPlayAgainClicked=()=>{
      this.resetGame()
    }
    resetGame=()=>{
        const {score,topScore}=this.state
        this.setState({
            score:0,
            gameStatus:'Playing',
            triggredEmojisList:[],
            topScore:score>topScore?score:topScore,
        })
    }
    onChangeTheme=()=>{
        this.setState({
            theme:this.state.theme==='light'?'dark':'light',
        })
    }
    componentDidMount=()=>{
        const emojiData=this.getData()
        this.setState({
            emojiData,
        })
    }
    render(){
        const {theme,score,topScore,gameStatus,emojiData}=this.state
        if(gameStatus==='Playing'){
            const emojis=emojiData.map(emoji=><EmojiCard  key={emoji.name}theme={theme} id={emoji.id} name={emoji.name} image={emoji.src} handleClick={this.onEmojiClick}/>)
        return(
        <Wrapper theme={theme}>
            <Header  theme={theme}currentScore={score} highScore={topScore} onChangeTheme={this.onChangeTheme}/>
            <div className={`flex flex-wrap justify-center`}>{emojis}</div><br/>
            <HowToPlay theme={theme} />
        </Wrapper>
        );}
        else if(gameStatus==='Won'){
           return(
        <Wrapper theme={theme}>
            <Header  theme={theme}currentScore={score} highScore={topScore} onChangeTheme={this.onChangeTheme}/>
            <Child >
                <WinOrLoose theme={theme} isWon={true} score={score} text={'You Won!'} playAgain={this.onPlayAgainClicked}/>
            </Child>
            <HowToPlay theme={theme} />
        </Wrapper>
           );
        }else{
            return(
                <Wrapper theme={theme}>
                <Header  theme={theme}currentScore={score} highScore={topScore} onChangeTheme={this.onChangeTheme}/>
            <Child>
                <WinOrLoose theme={theme} isWon={false} score={score} text={'You Lost!'} playAgain={this.onPlayAgainClicked}/>
            </Child>
            <HowToPlay theme={theme} />
            </Wrapper>
            );
        }
    }
}
export {EmojisGame}