import './Zenestyle.css'

interface ZeneProps {
    zeneCim: string;
    zeneEloado: string;
    zeneHossz: number;
    zeneKedvenc: boolean;
    // muvelet: (cim: string, eloado: string, hossz: number, kedvenc: boolean) => void;
}

export function Fejlec() {
    return <>
        <thead className='fejlec'>
            <tr>
                <th>Zene címe</th>
                <th>Zene Előadó</th>
                <th>Zene hossza</th>
                <th>Kedvenc zene-e</th>
                <th>Összes adat</th>
            </tr>
        </thead>
    </>
}



export function TbodyBelso(props: ZeneProps) {
    return <>
        <tr className={(props.zeneKedvenc) ? "kedvenc" : ""}>
            <td>{props.zeneCim}</td>
            <td>{props.zeneEloado}</td>
            <td>{props.zeneHossz}</td>
            <td>{(props.zeneKedvenc) ? "✅" : "❌"}</td>
            <td><button
                onClick={() => alert(`Zene címe: ${props.zeneCim}, Előadó: ${props.zeneEloado}, Zene hossza:${props.zeneHossz}, Kedvenc dal: ${(props.zeneKedvenc) ? "Igen" : "Nem"}`)
                }>Teljes Kiiratás</button></td>
        </tr>
    </>
}