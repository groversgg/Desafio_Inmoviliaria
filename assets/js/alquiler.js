const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad ',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234 ',
      habitaciones: 2,
      baños: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      baños: 2,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baños: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Loft moderno',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este loft moderno ofrece un diseño contemporáneo y espacio abierto',
      ubicacion: '321 Industrial Ave, Loft District, CA 45678',
      habitaciones: 4,
      baños: 3,
      costo: 4000,
      smoke: true,
      pets: true
    }
  ];
  
  // Código para renderizar las propiedades
  const contenedorPropiedades = document.getElementById('propiedades-alquiler');
  
  propiedades_alquiler.forEach(propiedad => {
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
  
    contenedorPropiedades.innerHTML += propiedadHTML;
  });
  