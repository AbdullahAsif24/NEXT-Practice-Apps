import { productItemType } from "./productItemType";

export default function Product({ serialNum, name, price, category }: productItemType) {
    return (
        <>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid black' }}>{serialNum}</td>
                    <td style={{ border: '1px solid black' }}>{name}</td>
                    <td style={{ border: '1px solid black' }}>{price}</td>
                    <td style={{ border: '1px solid black' }}>{category}</td>
                </tr>
            </tbody>
        </>
    )
}