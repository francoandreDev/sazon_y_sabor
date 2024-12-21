CREATE OR ALTER PROCEDURE dbo.MostrarSPHelp
    @TablaNombre NVARCHAR(128)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX);
    SET @sql = 'SP_HELP ' + QUOTENAME(@TablaNombre);
    EXEC sp_executesql @sql;
END;
GO;


CREATE OR ALTER PROCEDURE dbo.ObtenerPrimeros10Registros
    @TablaNombre NVARCHAR(128),
    @Columnas NVARCHAR(MAX),
    @OrdenarPor NVARCHAR(128)
AS
BEGIN
    DECLARE @sql NVARCHAR(MAX);
    SET @sql = 'SELECT TOP 10 ' + @Columnas + ' FROM ' + QUOTENAME(@TablaNombre) + ' ORDER BY ' + QUOTENAME(@OrdenarPor);
    EXEC sp_executesql @sql;
END;
GO;


CREATE OR ALTER PROCEDURE dbo.MostrarSeccionTabla
    @TablaNombre NVARCHAR(128),
	@Columnas NVARCHAR(MAX),
    @OrdenarPor NVARCHAR(128)
AS
BEGIN
	SELECT 'Sección ' + @TablaNombre AS [Inicio];
    DECLARE @sql NVARCHAR(MAX);
    SET @sql = 'SELECT TOP 10 ' + @Columnas + ' FROM dbo.' + @TablaNombre + ' ORDER BY ' + @OrdenarPor;  -- Muestra datos
    EXEC sp_executesql @sql;
	SET @sql = 'EXEC SP_HELP ''dbo.' + @TablaNombre + ''''; -- Muestra estructura
    EXEC sp_executesql @sql;
	DECLARE @End NVARCHAR(30);
	SELECT 'Sección ' + @TablaNombre AS [Fin];
END;
GO;



-- Información sobre la tabla usuarios
EXEC dbo.MostrarSeccionTabla 'usuarios', 'id, rol, nombre, correo, telefono', 'id ASC'; 

-- Información sobre la tabla comentarios
EXEC dbo.MostrarSeccionTabla 'comentarios', 'id, fecha, contenido', 'fecha DESC'; 

-- Información sobre la tabla mesas
EXEC dbo.MostrarSeccionTabla 'mesas', 'capacidad, estado, id', 'capacidad DESC'; 

-- Información sobre la tabla reservas
EXEC dbo.MostrarSeccionTabla 'reservas', 'id, fecha_hora, numero_personas, estado', 'fecha_hora DESC'; 

-- Información sobre la tabla pagos
EXEC dbo.MostrarSeccionTabla 'pagos', 'id, fecha, monto, modo_pago', 'fecha DESC'; 
