const data =[
    {
        id : 0,
        isPacked: true,
        name :"Space suit"
    },
    
]
function Item({ name, isPacked }) {
    return  <li>{name} {isPacked && "✔"  } </li>/*작성하세요 */;

}
export default function ConditionJsx1() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
    );
  }
  
