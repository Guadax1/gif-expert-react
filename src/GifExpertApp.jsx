import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {

        const categoriesEvaluation = categories.map( category => category.toLowerCase() );

        if( categoriesEvaluation.includes(newCategory.toLowerCase() ) ) return;

        // categories.push('League Of Legens'); //No se recomienda usar ya que el push() muta los objetos
        // setCategories( cat => [ ...cat, 'League Of Legens' ] );
        setCategories([ newCategory, ...categories ]);
    };

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 

            onNewCategory={ onAddCategory }
        />
        
        { 
            categories.map( category => (
                <GifGrid 
                    key={category}
                    category={ category } />
            ))
        }

    </>
  );
};