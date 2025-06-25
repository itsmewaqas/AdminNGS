import React, { useState } from "react";



type Item = {
  label: string;
  checked: boolean;
};

const initialItems: Item[] = [
  { label: 'Home', checked: false },
  { label: 'About', checked: false },
  { label: 'Services', checked: false },
  { label: 'Contact', checked: false },
];

const Drag: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ]);


  const [itemss, setItemss] = useState<Item[]>(initialItems);

  const toggleCheck = (index: number) => {
    const updated = [...itemss];
    updated[index].checked = !updated[index].checked;
    setItemss(updated);
  };


  const [dragItemIndex, setDragItemIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragItemIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (dragItemIndex === null || dragItemIndex === index) return;

    const newItems = [...items];
    const draggedItem = newItems[dragItemIndex];

    // Remove the dragged item and insert it at the new index
    newItems.splice(dragItemIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    setDragItemIndex(index);
  };

  return (
    <div className="container">
      <h2>Custom Drag & Drop (TypeScript)</h2>
      <ul className="drag-list">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            className="drag-item"
          >
            {item}
          </li>
        ))}
      </ul>



      <ul className="menu">
        {itemss.map((item, index) => (
          <li
            key={index}
            className={item.checked ? 'active' : ''}
          >
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(index)}
              />
              {item.label}
            </label>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Drag;


// import React, { useState } from 'react';

// const initialData = [
//   {
//     id: 1,
//     title: 'Parent 1',
//     children: ['Child 1.1', 'Child 1.2'],
//   },
//   {
//     id: 2,
//     title: 'Parent 2',
//     children: ['Child 2.1', 'Child 2.2'],
//   },
//   {
//     id: 3,
//     title: 'Parent 3',
//     children: ['Child 3.1'],
//   },
// ];

// export default function Drag() {
//   const [data, setData] = useState(initialData);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const onDragStart = (index:any) => {
//     setDraggedIndex(index);
//   };

//   const onDragOver = (event:any) => {
//     event.preventDefault(); // Required to allow dropping
//   };

//   const onDrop = (index:any) => {
//     if (draggedIndex === null || draggedIndex === index) return;

//     const items = [...data];
//     const draggedItem = items[draggedIndex];
//     items.splice(draggedIndex, 1);
//     items.splice(index, 0, draggedItem);

//     setData(items);
//     setDraggedIndex(null);
//   };

//   return (
//     <div>
//       {data.map((parent, index) => (
//         <div
//           key={parent.id}
//           draggable
//           onDragStart={() => onDragStart(index)}
//           onDragOver={onDragOver}
//           onDrop={() => onDrop(index)}
//           style={{
//             border: '1px solid #ccc',
//             marginBottom: '10px',
//             padding: '10px',
//             backgroundColor: '#f9f9f9',
//             borderRadius: '4px',
//           }}
//         >
//           <strong>{parent.title}</strong>
//           <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
//             {parent.children.map((child, i) => (
//               <li key={i}>{child}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

