//linking the styles page to this file 
import '../CSS/Images.css'


//importing pictures from folder
import Er1 from '../media/er1.PNG'
import Er2 from '../media/er2.PNG'
import Er3 from '../media/er3.PNG'
import Er4 from '../media/er4.PNG'
import Er5 from '../media/er5.PNG'
import Er6 from '../media/er6.PNG'
import Er7 from '../media/er7.PNG'
import Er8 from '../media/er8.PNG'
import Er9 from '../media/er9.PNG'
import Er10 from '../media/er10.PNG'
import Er11 from '../media/er11.PNG'
import Er12 from '../media/er12.PNG'
import Er13 from '../media/er13.PNG'
import Wr1 from '../media/wr1.PNG'
import Wr2 from '../media/wr2.PNG'
import Green from '../media/media/image_1.png'

const Images = (e) => {
    return (
        <div className="Container">
            <div className="Image_arrangement">
                <div className="row img-grid gallery-item">
                    <div className="column fit-image ">
                        <div className="row w-1 h-3"><img src={Er12} alt="pic1" id="pic-1" width={271} height={312} /></div>
                        <div className="row w-3 h-2"><img src={Er10} alt="pic2" id="pic-2" width={227} /></div>
                        <div className="row w-2 h-2"><img src={Er9} alt="pic3" id="pic-3" /></div>
                        <div className="row w-a h-1"><img src={Er6} alt="pic7" id="pic-7" /></div>
                        <div className="row w-2 h-1"><img src={Er5} alt="pic8" id="pic-8" /></div>
                        <div className="row w-2 h-5"><img src={Er7} alt="pic11" id="pic-11" /></div>
                        <div className="row w-1 h-4"><img src={Er1} alt="pic9" id="pic-9"  /></div>
                        <div className="row w-3 h-4"><img src={Er2} alt="pic10" id="pic-10"  /></div>
                        
                    </div>

                    
                    <div className="column fit-image">
                        <div className="row w-4 h-2"><img src={Wr2} alt="pic4" id="pic-4" /></div>
                        <div className="row w-2 h-2"><img src={Er8} alt="pic14" id="pic-14" /></div>
                        <div className="row w-4 h-2"><img src={Wr1} alt="pic12" id="pic-12" /></div>
                        <div className="row w-2 h-2"><img src={Er11} alt="pic15" id="pic-15" /></div>
                        <div className="row w-3 h-2"><img src={Er4} alt="pic13" id="pic-13" /></div>
                        <div className="row w-3 h-2"><img src={Er8} alt="pic14" id="pic-14" /></div>
                    </div>


                    <div className="column fit-image ">
                    <div className="row w-6 h-4"><img src={Er13} alt="pic6" id="pic-6" /></div>
                        <div className="row w-6 h-2"><img src={Er3} alt="pic16" id="pic-16" /></div>
                        
                    </div> 
                </div>      
            </div>
            <div className="Green">
                <img src={Green} alt="Green-eyed-girl" id="Green-Eyes" />
            </div>
        </div>
    );
}

export default Images;