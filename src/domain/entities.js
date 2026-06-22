export const money = value => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(value);
export const statusLabels={pending:'Pendiente',confirmed:'Confirmada',in_progress:'En curso',completed:'Finalizada',cancelled:'Cancelada',active:'Activo',suspended:'Suspendido',rejected:'Rechazado',published:'Publicada',reported:'Reportada',hidden:'Oculta'};
export const bookingGroups={active:['pending','in_progress'],upcoming:['confirmed'],history:['completed','cancelled']};
