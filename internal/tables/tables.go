package tables

import (
	"fmt"

	"github.com/xuri/excelize/v2"
)

func GetTable() string {
	f, err := excelize.OpenFile("./db/BIGO_R9.5_R3.3_R3.2.xlsx")

	if err != nil {
		return "error table"
	}

	data, err := f.GetCellValue("Sheet1", "A2")

	if err != nil {
		return err.Error()
	}

	fmt.Println(data)

	return data
}
