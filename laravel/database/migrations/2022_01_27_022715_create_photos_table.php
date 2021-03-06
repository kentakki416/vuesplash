<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotosTable extends Migration
{
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->bigInteger('user_id')->unsigned();
            $table->string('filename');
            $table->timestamps();
    
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
}
