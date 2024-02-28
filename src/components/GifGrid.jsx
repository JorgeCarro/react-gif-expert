
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  

    const {images, isLoading} = useFetchGifs( category );

    
    //NUNCA SE DEBEN EJECUTAR FUNCIONES DENTRO DEL FUNCIONAL COMPONENT
    //getGifs(category);
  
  
    return (
    <>
        <h3>{ category }</h3>
        {
            //una forma de mostrar/ocultar mensaje con un ternario
            //isLoading 
            //? (<h2 >Cargando...</h2>)
            //: null
            // tambien se podría crear un componente para hacer la logica de mostrar o no
            // <LoadingMessage isLoading={ isLoading } />

            // DE ESTA MANERA SE OPTIMIZA EL CÓDIGO ANTERIOR CON && y no se renderiza en el html

            isLoading && (<h2 >Cargando...</h2>)

        }
        


        {/* className sustituye a class tradicional en los archivos jsx */}
        <div className="card-grid">

            {/* {
                images.map( image => (
                    <li key= {image.id}>{image.title}</li>
                ))
            } 
            EL ANTERIOR CODIGO SE PUEDE DESESCTRUCTURAR Y QUEDA MAS LIMPIO
            */}
           {
                images.map( (image) => (

                    <GifItem 
                        key={image.id} 
                        //con spread se 'esparcen' todas las props
                        {...image}
                    />
                    
                ))

           }
           
        </div>
       
    
    </>
  )
}
