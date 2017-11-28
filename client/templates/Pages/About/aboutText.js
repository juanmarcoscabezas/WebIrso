import { Template } from 'meteor/templating';

import './about.html';

Template.about.helpers({
  aboutTitle:"¿Quiénes somos?",
  misionTitle: "Misión",
  visionTitle: "Visión",
  compromiseTitle: "Compromiso Institucional",
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"+
  "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"+
  "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint"+
  "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est"+
  "laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"+
  "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"+
  "ut aliquip ex ea commodo consequat.",
  mision: "Somos una institución de imágenes "+
  "diagnosticas de primer y segundo nivel de complejidad, comprometida con la calidad"+
  "y el mejoramiento continuo, promovemos estándares de calidad: oportunidad, seguridad,"+
  " pertinencia, confiabilidad y una atención con amabilidad y servicio. Estamos respaldados"+
  "por el mejor equipo de especialistas, colaboradores, tecnología de avanzada e integralidad"+
   "para bienestar de los usuarios, la comunidad, colaboradores y socios.",
   vision: "Para el año 2020, consolidar a la Institución, como líder en la prestación del"+
       "servicio de imágenes diagnósticas, reconocida por garantizar altos"+
       "estándares de calidad y actualización tecnológica, orientados a proteger"+
       "integralmente la seguridad del paciente, generar confiabilidad en sus"+
       "diagnósticos y humanización en los procesos de atención que permitan"+
       "cimentar el camino a la acreditación, fortalecer su competitividad y rentabilidad.",
  compromise: "Atender a las necesidades que involucran los cambios en el desarrollo de"+
  "actividades de la salud y conociendo las disposiciones de la normatividad"+
  "legal vigente emanada por el ministerio de la protección social que"+
  "estructura y reglamenta a las entidades prestadoras de servicios de salud en"+
  "la Resolución 2003 de 2014 en la cual estructuran con obligatoriedad los"+
  "procesos mínimos que se deben tener de acuerdo a el nivel de complejidad"+
  "de cada establecimiento que presta un servicio de salud.",
});
