
import guitarra from  '../assets/images/guitarra-clasica-valencia-de-estudio-tamano-mini-22-vc102-color-natural.jpg'; 
import trompeta from '../assets/images/trompeta-lincoln-winds-en-bb-con-terminacion-en-laca-dorada.jpg';
import saxo from '../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg';
import corno from '../assets/images/corno-jupiter-bb-valvulas-fosforadas-rose-brass-leadpipe-c-estuche-jhr-754.jpg';
import clarinete from '../assets/images/clarinete-lincoln-winds-jycl1301-con-17-llaves-y-estuche-rigido.jpg';
import violin from '../assets/images/violin-de-estudio-palatino-44-color-rojo.jpg';
import amplificador from '../assets/images/amplificador-de-auriculares-isk-4-salidas-trs-ha300.jpg';
import mixer from '../assets/images/mixer-5-canales-mackie-mix5-cphantom.jpg';
import consola from '../assets/images/consola-digital-zoom-l-12-12-canales-mezcla-vivo-monitores-grabacion.jpg';


import guitarraDetail from  '../assets/images/guitarra-clasica-valencia-de-estudio-tamano-mini-22-vc102-color-natural_detail.jpg'; 
import trompetaDetail from '../assets/images/trompeta-lincoln-winds-en-bb-con-terminacion-en-laca-dorada_detail.jpg';
import saxoDetail from '../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio_detail.jpg';
import cornoDetail from '../assets/images/corno-jupiter-bb-valvulas-fosforadas-rose-brass-leadpipe-c-estuche-jhr-754_detail.jpg';
import clarineteDetail from '../assets/images/clarinete-lincoln-winds-jycl1301-con-17-llaves-y-estuche-rigido_detail.jpg';
import violinDetail from '../assets/images/violin-de-estudio-palatino-44-color-rojo_detail.jpg';
import amplificadorDetail from '../assets/images/amplificador-de-auriculares-isk-4-salidas-trs-ha300_detail.jpg';
import mixerDetail from '../assets/images/mixer-5-canales-mackie-mix5-cphantom_detail.jpg';
import consolaDetail from '../assets/images/consola-digital-zoom-l-12-12-canales-mezcla-vivo-monitores-grabacion_detail.jpg';
                                          

const products = [
    {
        id: '1001',
        title: 'GUITARRA CLASICA VALENCIA DE ESTUDIO TAMAÑO MINI (22) C102 COLOR NATURAL',
        detail: 'Origen China - Cuerdas 6 - Tipo Equalizador: No - Corte: No - Mano: Diestro - Accesorio Incluido: No',
        category: 'instrumentos',
        price: '$ 20.748,46', 
        imgItemURL: guitarra,
        imgItemDetailURL: guitarraDetail,
        stock: 5,
        initial: 0,
    },
       
    
    {
        id: '1002',
        title: 'TROMPETA LINCOLN WINDS EN BB CON TERMINACIÓN EN LACA DORADA', 
        detail: 'Trompeta Lincoln Bb  en Dorado - Origen: China',
        category: 'instrumentos',
        price: '$ 47.498,26', 
        imgItemURL: trompeta,
        imgItemDetailURL: trompetaDetail,
        stock: 5, 
        initial: 0,
    },
    
    
    {
        id: '1003',
        title: 'SAXO ALTO STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO', 
        detail: 'Saxo Alto Stagg levante Eb con estuche para estudio - Origen: China',
        category: 'instrumentos',
        price: '$ 160.221,00', 
        imgItemURL: saxo, 
        imgItemDetailURL: saxoDetail,
        stock: '15', 
        initial: '0',
    },
    
    {
        id: '1004',
        title: 'CORNO JUPITER | BB | VALVULAS FOSFORADAS | ROSE BRASS LEADPIPE', 
        detail: 'Corno Jupiter Bb - Válvulas fosforadas - Reose brass leadpipe c/estuche - JHR-754L - Origen: China',
        category: 'instrumentos',
        price: '$ 612.528,88', 
        imgItemURL: corno, 
        imgItemDetailURL: cornoDetail,
        stock: '8', 
        initial: '0',
    },
    
     
    {
        id: '1005',
        title: 'CLARINETE LINCOLN WINDS JYCL1301 CON 17 LLAVES',
        detail: 'Clarinete Lincoln Winds JYCL1301 con 17 llaves - Origen: China',
        category: 'instrumentos',
        price: '$ 44.998,35', 
        imgItemURL: clarinete,  
        imgItemDetailURL: clarineteDetail,
        stock: '17', 
        initial: '0',
    },
    
    
    {
        id: '1006',
        title: 'VIOLIN DE ESTUDIO PALATINO 4/4', 
        detail: 'Violín de estudio Palatino 4/4 - Rojo - Origen: China',
        category: 'instrumentos',
        price: '$ 12.832,05', 
        imgItemURL: violin,     
        imgItemDetailURL: violinDetail,
        stock: '10', 
        initial: '0',
    },
    
    
    {
        id: '1007',
        title: 'AMPLIFICADOR DE AURICULARES ISK | 4 SALIDAS TRS | HA300', 
        detail: 'Amplificador de Auriculares ISK - 4 Salidas TRS - HA300 - Fuente de Alimentación - Origen: China',
        category: 'sonido',
        price: '$ 10.111,71', 
        imgItemURL: amplificador,  
        imgItemDetailURL: amplificadorDetail,
        stock: '22', 
        initial: '0',
    },
    
     
    {
        id: '1008',
        title: 'MIXER 5 CANALES MACKIE MIX5 C/PHANTOM', 
        detail: 'Mixer 5 canales Mackie Mix5 c/Phatom - Analógica - Fuente Externa -s/Efectos - Origen: China',
        category: 'sonido',
        price: '$ 12.464,20', 
        imgItemURL: mixer, 
        imgItemDetailURL: mixerDetail,
        stock: '17', 
        initial: '0',
    },
    
    
    {
        id: '1009',
        title: 'CONSOLA DIGITAL ZOOM L-12 | 12 CANALES | MEZCLA VIVO', 
        detail: 'Consola Digital Zoom L-12 12 Canales distintos (8 mono y 2 estéreo) con conexión XLR ó de 1/4 de pulgada Entradas RCA y TS de línea',
        category: 'sonido',
        price: '$ 224.659,14', 
        imgItemURL: consola,   
        mgItemDetailURL: consolaDetail,
        stock: '9', 
        initial: '0',
    }
    
    
];


export default products;