"use client";

import CustomDialog from "@/components/dialog";
import OrderForm from "@/components/forms/order-form";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";

function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const modalRef = useRef();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {children}
      <Button
        variant="contained"
        sx={{
          minWidth: "unset",
          width: "50px",
          height: "50px",
          inset: "auto 24px 24px auto",
          position: "fixed",
          borderRadius: "9999px",
        }}
        onClick={handleOpenDialog}
      >
        <Add />
      </Button>
      <CustomDialog
        title="Create Orders"
        content={<OrderForm mode="add" ref={modalRef} />}
        ref={modalRef}
        open={dialogOpen}
        handleClose={handleCloseDialog}
        fullWidth={true}
        fullScreen={false}
        maxWidth={false}
      />
    </>
  );
}

export default DashboardTemplate;
