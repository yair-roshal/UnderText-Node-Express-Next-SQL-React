import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

import { useState, useCallback } from "react"

export default function DialogComponent({ text, buttonRight, open, onClose }) {
  console.log("{text, buttonRight}", { text, buttonRight })

  const [dialogOpen, setDialogOpen] = useState(open)

  const handleCloseDialog = useCallback(() => {
    setDialogOpen(false)
    onClose()
  }, [onClose])

  const handleOpenDialog = useCallback(() => {
    setDialogOpen(true)
  }, [])

  React.useEffect(() => {
    setDialogOpen(open)
  }, [open])

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DialogTitle"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{buttonRight}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
