<template>
    <div
      v-for="(certificate, index) in props.certificateData"
      :key="certificate.id"
      class="certificate"
    >
      <svg
        :viewBox="'0 0 800 600'"
        xmlns="http://www.w3.org/2000/svg"
        class="certificate__svg"
      >
        <!-- Background -->
        <rect width="100%" height="100%" fill="#edf5ff"/>
        <image
          href="/public/image/cabinet/cabinetCertificates/certificate-bg.svg"
          x="0" y="0" width="100%" height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
  
        <!-- Title -->
        <text
          x="50%"
          y="50px"
          text-anchor="middle"
          class="certificate__title"
        >
          Сертификат
        </text>
  
        <!-- Student Name -->
        <text
          x="50%"
          y="150px"
          text-anchor="middle"
          class="certificate__student-name"
        >
          {{ certificate.studentData }}
        </text>
  
        <!-- Event Info -->
        <text
          x="50%"
          y="200px"
          text-anchor="middle"
          class="certificate__text"
        >
          Участвовал в вебинаре по IT технологиям для преподавателей
        </text>
  
        <!-- Date -->
        <text
          x="50%"
          y="300px"
          text-anchor="middle"
          class="certificate__date"
        >
          Дата вебинара: {{ certificate.date }}
        </text>
  
        <!-- Footer -->
        <text
          x="50%"
          y="550px"
          text-anchor="middle"
          class="certificate__footer-title"
        >
          {{ certificate.certificateName }}
        </text>
  
        <!-- Footer Bottom -->
        <text
          x="50%"
          y="580px"
          text-anchor="middle"
          class="certificate__data"
        >
          {{ certificate.date }}
        </text>
      </svg>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
      certificateData: {
          type: Array,
          default: () => []
      }
  })
  </script>
  