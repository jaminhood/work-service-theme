Public Class MainForm
    Private Sub CalculateButton_Click(sender As Object, e As EventArgs) Handles CalculateButton.Click
        ' Input the first and last numbers from the user
        Dim first As Integer
        Dim last As Integer

        If Integer.TryParse(FirstNumberTextBox.Text, first) AndAlso
           Integer.TryParse(LastNumberTextBox.Text, last) Then
            ' Clear any previous results
            ResultsListBox.Items.Clear()

            ' Check if the last number is greater than or equal to the first number
            If last >= first Then
                ' Loop through the numbers from 'first' to 'last'
                For num As Integer = first To last
                    ' Calculate the square of the current number
                    Dim square As Integer = num * num
                    ' Display the ordered pair (number, square)
                    ResultsListBox.Items.Add($"({num}, {square})")
                Next
            Else
                ResultsListBox.Items.Add("The last number must be greater than or equal to the first number.")
            End If
        Else
            ResultsListBox.Items.Add("Please enter valid numbers.")
        End If
    End Sub
End Class