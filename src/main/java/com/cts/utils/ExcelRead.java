package com.cts.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelRead {
	
	private static FileInputStream file = null;

	private static XSSFWorkbook book = null;

	private static String[][] data = null;
	
	public static int dataRows;
	
	public static int dataCells;

	public static String[][] getSheetIntoStringArray(String fileDetails, String sheetName) throws IOException {

		try {
			file = new FileInputStream(fileDetails);

			book = new XSSFWorkbook(file);

			XSSFSheet sheet = book.getSheet(sheetName);

			int rowCount = sheet.getPhysicalNumberOfRows();
			System.out.println(rowCount);

			XSSFRow row = sheet.getRow(0);
			int cellCount = row.getPhysicalNumberOfCells();
			System.out.println(cellCount);

			data = new String[rowCount - 1][cellCount];

			DataFormatter format = new DataFormatter();
			for (int i = 1; i < rowCount; i++)
			{
				for (int j = 0; j < cellCount; j++)
				{
                                                                   
					XSSFCell cell = sheet.getRow(i).getCell(j);

					String cellValue = format.formatCellValue(cell);

					System.out.println(cellValue);

					data[i - 1][j] = cellValue;
				}
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		} 
		finally {
			book.close();
			file.close();
		}
		return data;
	}
}
