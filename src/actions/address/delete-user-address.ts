"use server";

import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const deleteUserAddress = async ( userId: string) => {
  try {

    
    await prisma.userAddress.delete({
        where: { userId },
      });
    return {
      ok: true,
      message: "direccion borrada correctamente"
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo borrar la dirección",
    };
  }
};

