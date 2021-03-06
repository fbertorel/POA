PGDMP     $                    y            postgres    13.3    13.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    13442    postgres    DATABASE     l   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3014                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            ?           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            ?            1259    16454    exchange    TABLE     ?   CREATE TABLE public.exchange (
    id_exchange integer NOT NULL,
    id_usuario_fk integer NOT NULL,
    id_producto_fk integer NOT NULL
);
    DROP TABLE public.exchange;
       public         heap    postgres    false            ?            1259    16452    exchange_id_exchange_seq    SEQUENCE     ?   ALTER TABLE public.exchange ALTER COLUMN id_exchange ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.exchange_id_exchange_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    206            ?            1259    16402    producto    TABLE     ?   CREATE TABLE public.producto (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    points integer NOT NULL,
    brand character varying
);
    DROP TABLE public.producto;
       public         heap    postgres    false            ?            1259    16448    producto_id_seq    SEQUENCE     ?   ALTER TABLE public.producto ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.producto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    202            ?            1259    16394    usuario    TABLE     ?   CREATE TABLE public.usuario (
    id integer NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    email character varying,
    points integer NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            ?            1259    16450    usuario_id_seq    SEQUENCE     ?   ALTER TABLE public.usuario ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    201            ?          0    16454    exchange 
   TABLE DATA           N   COPY public.exchange (id_exchange, id_usuario_fk, id_producto_fk) FROM stdin;
    public          postgres    false    206   4       ?          0    16402    producto 
   TABLE DATA           H   COPY public.producto (id, name, description, points, brand) FROM stdin;
    public          postgres    false    202   g       ?          0    16394    usuario 
   TABLE DATA           I   COPY public.usuario (id, firstname, lastname, email, points) FROM stdin;
    public          postgres    false    201          ?           0    0    exchange_id_exchange_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.exchange_id_exchange_seq', 31, true);
          public          postgres    false    205            ?           0    0    producto_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.producto_id_seq', 7, true);
          public          postgres    false    203            ?           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 17, true);
          public          postgres    false    204            4           2606    16409    producto Producto_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT "Producto_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.producto DROP CONSTRAINT "Producto_pkey";
       public            postgres    false    202            2           2606    16401    usuario Usuario_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuario DROP CONSTRAINT "Usuario_pkey";
       public            postgres    false    201            6           2606    16458    exchange id_exchange 
   CONSTRAINT     [   ALTER TABLE ONLY public.exchange
    ADD CONSTRAINT id_exchange PRIMARY KEY (id_exchange);
 >   ALTER TABLE ONLY public.exchange DROP CONSTRAINT id_exchange;
       public            postgres    false    206            8           2606    16464    exchange id_producto    FK CONSTRAINT     }   ALTER TABLE ONLY public.exchange
    ADD CONSTRAINT id_producto FOREIGN KEY (id_producto_fk) REFERENCES public.producto(id);
 >   ALTER TABLE ONLY public.exchange DROP CONSTRAINT id_producto;
       public          postgres    false    2868    206    202            7           2606    16459    exchange id_usuario    FK CONSTRAINT     z   ALTER TABLE ONLY public.exchange
    ADD CONSTRAINT id_usuario FOREIGN KEY (id_usuario_fk) REFERENCES public.usuario(id);
 =   ALTER TABLE ONLY public.exchange DROP CONSTRAINT id_usuario;
       public          postgres    false    2866    206    201            ?   #   x?3?4?4?2?4??@?!?	?4?2?1z\\\ K]%      ?   ?   x?-?A? ?(??Ƹ1nl\??$??4zzIt?&?ż^x?!pA?.7tR"?ْ³Fÿg?5p?Ҙ???{S?GK???y)6^?=???R???K???????H??ϝ??^????%͞??#?/To.?      ?   n   x?3??HM.?/?t?ϫJ?I???H??*3?????s9M??9}??2?9}???rs@?CznbfX??)?!?[Qb^r>?Sj??Ԝ?|δ$?!#??????+F??? Jz(?     