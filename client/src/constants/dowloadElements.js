export const handleDownload = url => {
	const link = document.createElement('a');
	link.href = url; // Ruta al archivo que deseas descargar
	link.download = 'CV-JuanGoncalves2025.pdf'; // Nombre con el que se descargará el archivo
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export const handleClick = url => {
	window.location.href = url; // URL externa
};