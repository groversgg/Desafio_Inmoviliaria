const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      baños: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      baños: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      baños: 3,
      costo: 4500,
      smoke: false,
      pets: true
    }
  ];
  
  // Ejemplo de arreglo de propiedades para alquiler (estos datos deberían venir de un archivo separado en una aplicación real)
  const propiedades_alquiler = [
    {
      nombre: 'Casa de playa',
      src: 'https://casaydiseno.com/wp-content/uploads/2020/11/casas-modernas-playa-hogar-familiar-contemporaneo-concepto-abierto.jpg',
      descripcion: 'Esta hermosa casa de playa ofrece vistas al mar y acceso directo a la playa',
      ubicacion: '123 Beachfront Ave, Ocean View, CA 12345',
      habitaciones: 3,
      baños: 2,
      costo: 3000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Apartamento en la ciudad',
      src: 'https://ak.picdn.net/shutterstock/videos/1008736298/thumb/1.jpg',
      descripcion: 'Un moderno apartamento en el corazón de la ciudad',
      ubicacion: '456 City Road, Downtown, CA 23456',
      habitaciones: 2,
      baños: 1,
      costo: 1500,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Casa en el campo',
      src: 'https://www.metalocus.es/sites/default/files/styles/mopis_news_carousel_item__s_/public/especiales/1518/casa_en_el_campo.jpg?itok=_u1UGDsq',
      descripcion: 'Una encantadora casa de campo rodeada de naturaleza',
      ubicacion: '789 Country Lane, Rural Area, CA 34567',
      habitaciones: 4,
      baños: 2,
      costo: 2500,
      smoke: true,
      pets: true
    }
  ];
  
  // Función para renderizar propiedades
  function renderizarPropiedades(contenedor, propiedades) {
    propiedades.forEach(propiedad => {
      const propiedadHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p class="card-text">Ubicación: ${propiedad.ubicacion}</p>
              <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
              <p class="card-text">Baños: ${propiedad.baños}</p>
              <p class="card-text">Costo: $${propiedad.costo}</p>
              <p class="card-text ${propiedad.smoke ? 'text-success' : 'text-danger'}">${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
              <p class="card-text ${propiedad.pets ? 'text-success' : 'text-danger'}">${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += propiedadHTML;
    });
  }
  
  // Renderizar solo 3 propiedades de venta y 3 de alquiler
  document.addEventListener('DOMContentLoaded', () => {
    const contenedorVenta = document.getElementById('propiedades-venta');
    const contenedorAlquiler = document.getElementById('propiedades-alquiler');
    renderizarPropiedades(contenedorVenta, propiedades_venta.slice(0, 3));
    renderizarPropiedades(contenedorAlquiler, propiedades_alquiler.slice(0, 3));
  });
  