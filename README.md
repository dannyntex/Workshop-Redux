# Workshop-Redux

¿Qué es Redux?
Redux es una libreria Javascript para el manjejo del estado de las aplicaciones.

Todos los datos de su aplicación están en una sola estructura de datos llamada el estado que se encuentra en la store

Tu aplicación lee el estado de esta en la store

El estado nunca se muta directamente fuera de la store.

Las vistas emiten acciones que describen lo sucedido

Se crea un nuevo estado combinando el estado anterior y la acción mediante una función llamada reductor

 

Redux proporciona un montón de ventajas importantes:
Herramientas del navegador. Puede usar Redux DevTools para depurar su código Redux. Nos permite ver la lista de acciones enviadas, inspeccionar el estado e incluso viajar en el tiempo. Puede alternar en el historial de acciones y ver cómo el estado se ocupó de cada uno de ellos.

Manejo de los efectos secundarios . Con useReducer  tienes que inventar sus propias formas de organizar el código que realiza las solicitudes de red. Redux proporciona la API de middleware para manejar eso. Además, existen herramientas como Redux Thunk que facilitan aún más esta tarea.

Test .Como Redux se basa en funciones puras, es fácil de probar. Todas las pruebas se reducen a verificar la salida con las entradas dadas.

Patrones y Organización del Código . Redux está bien estudiado y existen recetas para la mayoría de los problemas. Existe una metodología llamada Ducksque puedes usar para organizar el código Redux.

Para empezar explicaremos que es un Reducer, que es una de las partes mas importantes de Redux.
Un reducer es una funcion que le llegan dos parametros State , que es estado actual de la aplicacion y Action, que es un objeto que siempre tiene la propiedad Type, y lo que hace es devolver un nuevo estado

Ejm Basico

const reducer = (state, action) => state

 


const action = 
{
    type: 'increment'
}

 

Reductor Básico
Codigo explicacion Reducer
Sabemos que los reductores aceptan dos argumentos, state y action. En este caso nuestro estado es un numero entero.

const incrementAction = { type: 'INCREMENT' };

De este modo estamos creando una accion type INCREMENT

Luego creamon un redutor donde que tenga el tipo INCREMENT que devolvera un nuevo estado + 1

 


function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else {
    return state;
  }
}

Podemos seguir creando acciones como DECREMENT

const decrementAction = { type: 'DECREMENT'}

y añadimos el case a reductor

 


case 'DECREMENT':
    return state - 1 

 

Redudor con Cantidad
codigo reducer cantidad

Ahora imaginamos que el usuario quiere expecificar la cantidad para incrementar o disminuir

Pues ahora nuestras acciones tiene una propiedad adicional.

 


{
    type:"INCREMENT",
    cantidad: 7
}

Modificamos nuestros reductores y aciones con action.cantidad

Lo pondemos probar en ./node_modules/.bin/babel-node archivo.js
yarn add babel-cli -D

 

La Store
Redux proporciona una funcion para crear la STORE , createStore(), que contiene el objet state y nos sirve algunos metodos , como dispatch y getState.

Dispatch: Metodo para enviar actiones a la store

getState: Metodo para leer el estado.

Crearemos createStore() que recibira un solo argumento reducer

Codigo reducer-store

 

Recapitulando Redux
Todos los datos de su aplicación están en una sola estructura de datos llamada estado que se encuentra en la store.

Vimos que la tienda tiene una sola variable privada para el estado, state.

Su aplicación lee el estado de esta en la store.

Usamos getState()para acceder al estado de la tienda.

El estado nunca se muta directamente fuera de la store.

Debido a que state es una variable privada, no se puede mutar fuera de la tienda.

Las vistas emiten acciones que describen lo sucedido.

Usamos dispatch()para enviar estas acciones a la tienda.

Se crea un nuevo estado combinando el estado anterior y la acción mediante una función llamada reductor.

Dentro de dispatch(), la store usa reducer()para obtener el nuevo estado, pasando al estado actual y la acción.

Las funciones reductoras deben ser funciones puras.

Basicamente hemos creado el patron Flux Flux | Flux 

 

¿Qué es flux?
Flux es un patrón de diseño. El predecesor de Flux en Facebook fue otro patrón de diseño, Model-View-Controller (MVC). MVC es un patrón de diseño popular tanto para aplicaciones web como de escritorio.

 

Añadimos createStore de Redux
Código con la importacion createStore desde Redux

Ahora instalamos Redux e importamos createStore. A continuación eliminamos la funcion createStore que habiamos instalado y vemos que todo funciona exactamente igual.

 

Redux Básico
Hemos podido ver una implementacion de Flux Redux. Creamos nuestra propia Store desde cero.Bueno ya tenemos una como funciona.

Ahora vamos a crear una aplicacion real con Redux, crearemos un contador, donde usaremos actiones, reductores y ademas como crear acciones asincronas.

Para empezar ya tengo un entorno con las dependecias descargadas y preparado para codificar.

Codigo contador Basico

Lo primero que vamos hacer es crear la Store , para ello creamos un archivo llamado store.js . Ahora importamos createStore desde Redux y el reducer que vamos a crear en un momento. Luego llamamos a la funcion createStore pasandole como parametro el reducer

 


import {createStore} from 'redux';
import {counterReducer} from '../features/counter/reducer';

export const store = createStore(counterReducer);

Lo siguiente que vamos hacer al igual que hicimos anteriormente es crear las acciones. De momento vamos a crearmos un archivo action.js con dos acciones donde solo tenemos un propiedad Type.

Archivo action.js

 


export const increment = () => ({ type: 'increment' })
export const decrement = () => ({ type: 'decrement' })

Luego creamos un archivo llamado reductor.js donde tendremos nuestros reductores.

 


export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'decrement':
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
}

En este momento ya podemos alimentar a nuestra aplicacion con la store , mediente el componente Provider de React-redux que permite que sus componentes React lean datos de una tienda Redux y envíen acciones a la store para actualizar el estado.

 


import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

    <Provider store={store}>
      <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

Creamos el componente Counter.js donde tendremos nuestro html, donde usaremos los dispatch y veremos nuestro estado.

Lo primero que haremos es importar la store, las acciones y los estilos

 


import React from 'react'
import { store } from '../../app/store'

import {
  decrement,
  increment
} from './action'

import styles from './Counter.module.css'

Como voy a tratar de explicar que es lo que tenemos en atresplayer, voy a crear clases para poder claro esto.

Creamoss la clase con el constructor

 


class Counter extends React.Component {
  constructor(props) {
    ```
y añadimos el metodo render  y el html



<div>
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label='Decrement value'
      >
        -
      </button>
      <span className={styles.value}>{0}</span>
      <button
        className={styles.button}
        aria-label='Increment value'
      >
        +
      </button>
    </div>
  </div>
  ```

Como estamos estamos usando createStore vamos a llamar a las funciones dispatch , getState y subcribe

Primero nos traemos el state y lo almacenamos

 


const state = store.getState()
const { value} = state
const count = value

En lo button usamos el evento onClick para lanzar los dispatch a los cuales le pasaremos como parametro las actiones


 onClick={() => store.dispatch(decrement())}
 onClick={() => store.dispatch(increment())}

y la variable count que sera el valor de nuestro estado.
<span className={styles.value}>{count}</span>

Hasta aqui bien.

Tambien podemos pasar parametros adicionales a nuestro reductor como es el siguiente ejm.


  <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'

        />
        <button
          className={styles.button}
      
        >
          Añade el valor
        </button
      </div>

Le añadimos al boton onClick con el dispatch y la accion con parametros

 


onClick={() => store.dispatch(incrementByAmount(incrementValue))}

Configuramos el input para cambiar el valor

 


value={this.state.incrementAmount}
onChange={(e) => {this.setState({incrementAmount:e.target.value})}}

Luego en las acciones añadimos una accion que recibe el valor del dispatch

 


export const incrementByAmount = (amount) => ({
  type: 'incrementByAmount',
  payload: amount
}) 

y al reductor un Case nuevo con la accion que le acabamos de crear

 


    case 'incrementByAmount':
      return {
        ...state,
        value: state.value + action.payload,
      };  

 

Los Middelware es una funciona de orden superior que toma una funcion dispatch despacha otro dispatch. Esto para lo efectos secundario dentro una accion,ya que no se puede hacer dispatch dentro de un reductor. Lo que hacemos es llamar a la funcion dispatch y en la accion tomatos otra vez el metodo Dispatch y el estado.

Asincronia
Redux no esta preparado para manejar la asincronia y pero existen herramientas como Thunk que hacen que esto sea posible.

Vamos hacer una prueba para ver como funciona esto.

Lo primero que hacemos, al igual que hicimos antes , añadimos las acciones a nuestro archivo actiones.js

 


export const incrementAsync = (amount) => (dispatch) => {
  dispatch({ type: 'incrementAsync/pending' })
  fetchCount(amount).then((response) => {
    dispatch({ type: 'incrementAsync/fulfilled', payload: response.data })
  })
}

Accion condicional
Como se pasa el estado desde a la accion podemos tratarlo para que nuestra accion sea lanzada segun lo que necesitemos es cada momento, ahora lo hemos preparado apra que solo los impares despachen la accion.

 


export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = getState().value;
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

Añadimos los botones

 


          <button
            className={styles.asyncButton}
            onClick={() => store.dispatch(incrementAsync(incrementValue))}
          >
            Añade async
          </button>
          <button
            className={styles.button}
            onClick={() => store.dispatch(incrementIfOdd(incrementValue))}
          >
            Añade si es impar
          </button>

y llamamos despachamos la acciones con el evento onClick

 


    onClick={() => store.dispatch(incrementAsync(incrementValue))}
    onClick={() => store.dispatch(incrementIfOdd(incrementValue))}

Vemos que la sincronia no funciona ,es porque aun no hemos instalado nuestro middelware thunk en la store.js

 


import thunk from 'redux-thunk'

export const store = createStore(counterReducer,applyMiddleware(thunk,logger));

 

Connect
COdigo con connect

Connect es otra forma de conectar la store con react, de hecho muy usado en atresplayer y que ya desde react-redux , dicen que aun es compatible con las ultimas versiones , pero que te vayas pensando en usar los hook.
Connect | React Redux 

Para empezar a cambiar la forma que recibimos el estado MapStateToProps es una funcion, que devolvera un objeto que se fusionara con los props del componente envuelto.
Tambien crearemos un mapDispatchToProps , que sera el segundo parametro de connect, que puede ser un objeto , una funcion o no proporcionarse. mapDispatchToProps le dara el dispatch al componte.

 


const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapStateToDispatch = (dispatch) => {

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount.payload)),
    incrementAsync :(amount) => dispatch(incrementAsync(amount)),
    incrementIfOdd: (amount) => dispatch(incrementIfOdd(amount)),


  }
}

Esta dos funciones las pasamos como parametros con la funcion importada de react-redux , connect. Y envolvemos el componente como si fuese una funcion de orden superior.

 


export default connect(
  mapStateToProps,
  mapStateToDispatch
  )(Counter)

Ahora, ya no nos hace falta importar la store y cambiamos la forma en que recibimos el stado y dispatch que son recibidas por props.
Como tampoco necesitamos suscribirnos ya que connect se encarga de renderizar cada vez que el stado cambia.

 

Redux con Hook
Contador Redux Hook

Para usar Hook , lo que hay que tener en cuenta es un Hook solo se puede usar en function component y en otros hook , ni mas ni menos. No esta permito su uso en funciones y en componenentes clase.

Con lo cual lo primero que haremos sera cambiar el componente class por un componente funcion.

 


const Counter = () => {
  const [incrementAmount,setIncrementAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.value)
  const incrementValue = Number(incrementAmount) || 0
  return (

Eliminamos los mapStateToProps y mapDispatchToProps. Exportamos el componente sin la envoltura de connect y eliminamos la importacion de connect.

Ahora lo que importamos dos hook de react-redux , useSelector, para el stado, y useDispatch, para los dispatch.

 


import { useDispatch, useSelector } from 'react-redux'

y cambiamos la forma en la que se estaba llamando

 


  const dispatch = useDispatch()
  const count = useSelector((state) => state.value)

y modificamos donde antes era this.props.dispatch por dispatch y this.props.value por count

Para manejar el estado local de incrementAmount, importamos useState y cambias setState por setIncrementAmount y this.state.incrementAmount por incrementAmount creados en useState.

En el archivo RowOpeningEpisode/index.js tenemos una mala practica estamos llamado a useDispatch y a connect en el mismo archivo.
