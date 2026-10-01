import { TbodyBelso } from "./Zenetipus";
import './Zenestyle.css'
const zeneAlbum: {
    cim: string;
    eloado: string;
    hossz: number;
    kedvenc: boolean;
}[] = [{
    cim: "Blinding Lights",
    eloado: "The Weeknd",
    hossz: 200,
    kedvenc: true
},
{
    cim: "Shape of You",
    eloado: "Ed Sheeran",
    hossz: 234,
    kedvenc: true
},
{
    cim: "Believer",
    eloado: "Imagine Dragons",
    hossz: 204,
    kedvenc: false
},
{
    cim: "Bad Guy",
    eloado: "Billie Eilish",
    hossz: 194,
    kedvenc: true
},
{
    cim: "As It Was",
    eloado: "Harry Styles",
    hossz: 167,
    kedvenc: false
},
{
    cim: "Perfect",
    eloado: "Ed Sheeran",
    hossz: 263,
    kedvenc: true
},
{
    cim: "Dance Monkey",
    eloado: "Tones and I",
    hossz: 210,
    kedvenc: false
},
{
    cim: "Counting Stars",
    eloado: "OneRepublic",
    hossz: 257,
    kedvenc: true
},
{
    cim: "Havana",
    eloado: "Camila Cabello",
    hossz: 217,
    kedvenc: false
},
{
    cim: "Levitating",
    eloado: "Dua Lipa",
    hossz: 203,
    kedvenc: true
},
{
    cim: "Radioactive",
    eloado: "Imagine Dragons",
    hossz: 187,
    kedvenc: false
},
{
    cim: "Lovely",
    eloado: "Billie Eilish",
    hossz: 200,
    kedvenc: true
}
    ];

export function Belso() {
    return <>
        <tbody className="">
            {
                zeneAlbum.map((zene, index) => (<TbodyBelso key={index} zeneCim={zene.cim} zeneEloado={zene.eloado} zeneHossz={zene.hossz} zeneKedvenc={zene.kedvenc} ></TbodyBelso>))
            }
        </tbody>
    </>
}
